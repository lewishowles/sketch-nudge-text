import { dd } from "./utils";
import { getFriendlyDisplay } from "@lewishowles/helpers/dist/general.js";
import { getLibraryByName, getSelectedTextLayers, getTextColourSwatchForLayer } from "./shared";
import { getNextIndex, isNonEmptyArray } from "@lewishowles/helpers/dist/array.js";
import { isNonEmptyObject } from "@lewishowles/helpers/dist/object.js";
import { isNonEmptyString } from "@lewishowles/helpers/dist/string.js";
import sketch from "sketch/dom";
import Settings from "sketch/settings";

const document = sketch.getSelectedDocument();

// The name of the colour to apply if no colour swatch is present on a text
// layer.
const defaultColourName = "grey/600";
// The Settings key for the current shade variable.
const CURRENT_SHADE_STORAGE_KEY = "howles:sketch-nudge-text:current-shade";

/**
 * Apply the next text colour, depending on the choice of direction. If we reach
 * the end of the list, wrap back to the start.
 *
 * @param  {boolean}  reverse
 *     Whether to reverse the direction, decreasing font order of colours.
 */
export function applyNextColour(reverse = false) {
	const textLayers = getSelectedTextLayers();

	if (!isNonEmptyArray(textLayers)) {
		dd("Please select a layer");
	}

	const referenceOrder = initialiseAvailableColours();

	textLayers.forEach(layer => {
		const currentColour = getTextColourSwatchForLayer(layer);
		const nextColour = getNextColour(currentColour, referenceOrder, reverse);

		if (!isNonEmptyObject(nextColour)) {
			dd("Couldn't determine the appropriate next colour");
		}

		if (nextColour.referencingColor) {
			layer.style.textColor = nextColour.referencingColor;
		}
	});
}

/**
 * Perform the necessary actions to retrieve the list of available colours from
 * the given library.
 */
export function initialiseAvailableColours() {
	// Get the desired colour library by name.
	const colourLibrary = getLibraryByName("Colours");

	// Import any found colours into the current document.
	return importColoursFromLibrary(colourLibrary);
}

/**
 * Given a library reference, import all text styles into the current document
 * for access by the script.
 *
 * @param  {object}  library
 *     The library from which to import text styles.
 */
function importColoursFromLibrary(library) {
	if (!isNonEmptyObject(library)) {
        dd(`Expected non-empty object <library>, received ${getFriendlyDisplay(library)}.`);
	}

	const importableColours = library.getImportableSwatchReferencesForDocument((document));

	if (!isNonEmptyArray(importableColours)) {
		dd(`No importable text styles could be found in the library "${libraryName}".`);
	}

	// Import all shared text styles into the document, just in case.
	const styles = [];

	importableColours.forEach(style => styles.push(style.import()));

	return styles;
}

/**
 * Get the next appropriate colour from the provided reference. For colours
 * labelled "colour/shade", we ignore shades and look for the next primary
 * colour.
 *
 * If we're at the end of the reference array, we wrap to the other end.
 *
 * @param  {object}  currentSwatch
 *     The current colour swatch applied to the layer.
 * @param  {array}  referenceOrder
 *     The list of colours to use as a reference.
 * @param  {boolean}  reverse
 *     Whether to reverse direction, moving backwards.
 */
function getNextColour(currentSwatch, referenceOrder, reverse = false) {
	// If we don't have valid reference, we can't continue, as we can't pick a
	// style from nothing.
	if (!isNonEmptyArray(referenceOrder)) {
		dd("Couldn't find the list of available colours to reference");
	}

	const currentColour = referenceOrder.find(reference => reference.name === currentSwatch.name);

	// If we can't find a current colour, revert to a default.
	if (!isNonEmptyObject(currentColour)) {
		return referenceOrder.find(reference => reference.name === defaultColourName);
	}

	const uniqueColours = getUniqueColoursWithShade(referenceOrder, currentColour.name);
	const currentIndex = uniqueColours.findIndex(swatch => swatch.name === currentColour.name);
	const nextIndex = getNextIndex(currentIndex, uniqueColours, { reverse, wrap: true });

	return uniqueColours[nextIndex];
}

/**
 * Given all colours as a reference, reduce the list to a unique set of colours
 * matching the same shade. For example, "red/600" would product "red/600",
 * "blue/600", "purple/600", etc.
 */
function getUniqueColoursWithShade(referenceOrder, colourName) {
	// If we don't have valid reference, we can't continue, as we can't pick a
	// style from nothing.
	if (!isNonEmptyArray(referenceOrder)) {
		dd("Couldn't find the list of available colours to reference");
	}

	if (!isNonEmptyString(colourName)) {
		dd(`Expected non-empty string <colourName>, received ${getFriendlyDisplay(colourName)}`);
	}

	const previousShade = Settings.settingForKey(CURRENT_SHADE_STORAGE_KEY) || "600";

	const [, desiredShade = previousShade] = colourName.split('/');

	// Update the current shade to match that of the current colour. We do this
	// on each move for simplicity, but also for completeness, as the shade may
	// change between colour jumps.
	Settings.setSettingForKey(CURRENT_SHADE_STORAGE_KEY, desiredShade)

	return referenceOrder.filter(swatch => swatch.name.includes(`/${desiredShade}`) || swatch.name === "white");
}

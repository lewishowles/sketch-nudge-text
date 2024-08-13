import sketch from "sketch/dom";
import { dd } from "./utils";
import { getFriendlyDisplay } from "@lewishowles/helpers/dist/general.js";
import { isNonEmptyString } from "@lewishowles/helpers/dist/string.js";

const libraries = sketch.getLibraries();
const document = sketch.getSelectedDocument();
const selectedLayers = document.selectedLayers.layers;

/**
 * Retrieve the currently selected layers, filtering out anything but a text
 * layer
 */
export function getSelectedTextLayers() {
	return selectedLayers.filter(layer => layer.type === "Text");
}

/**
 * Given a library name, retrieve a reference to that library. If the library
 * cannot be found, halt execution and display a message to the user.
 *
 * @param  {string}  libraryName
 *     The name of the library to retrieve.
 */
export function getLibraryByName(libraryName) {
	if (!isNonEmptyString(libraryName)) {
        dd(`Expected non-empty string <libraryName>, received ${getFriendlyDisplay(libraryName)}.`);
	}

	const libraries = sketch.Library.getLibraries();
	const library = libraries.find(library => library.name === libraryName);

	if (!library) {
        dd(`The library "${libraryName}" couldn't be found.`);
	}

	return library;
}

/**
 * For the given layer, retrieve a reference to the matching colour swatch,
 * based on the "textColour" of the given layer.
 *
 * If no swatch is found, returns undefined;
 *
 * @param  {object}  layer
 *     The layer from which to retrieve a matching swatch.
 */
export function getTextColourSwatchForLayer(layer) {
	const originalColour = layer.style.textColor;

	let matchingSwatch;

	libraries.forEach(library => {
		// TODO: Only perform these imports once per script run
		const importableSwatches = library.getImportableSwatchReferencesForDocument(document);

		importableSwatches.forEach(swatch => {
			const importedSwatch = swatch.import();

			if (importedSwatch.color === originalColour) {
				matchingSwatch = importedSwatch;
			}
		});
	});

	return matchingSwatch;
}

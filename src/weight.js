const { dd, getNextIndex, isNonEmptyArray } = require("./utils");
const { getSelectedTextLayers } = require("./shared");

const referenceWeights = [
	5, // Regular
	6, // Medium
	8, // Semibold
	9, // Bold
];

/**
 * Apply the next font weight in the set of defined options.
 *
 * @param  {boolean}  reverse
 *     Whether to reverse the direction, decreasing font weight.
 */
export function applyNextFontWeight(reverse = false) {
	const textLayers = getSelectedTextLayers();

	if (!isNonEmptyArray(textLayers)) {
		dd("Please select a layer");
	}

	textLayers.forEach(layer => {
		const currentIndex = referenceWeights.findIndex(weight => weight === layer.style.fontWeight);
		const nextIndex = getNextIndex(currentIndex, referenceWeights, { reverse });

		if (nextIndex < 0) {
			dd("Couldn't determine the appropriate next weight");
		}

		layer.style.fontWeight = referenceWeights[nextIndex];
	});
}

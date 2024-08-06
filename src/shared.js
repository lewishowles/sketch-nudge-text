const sketch = require("sketch/dom");
const document = sketch.getSelectedDocument();
const selectedLayers = document.selectedLayers.layers;

/**
 * Retrieve the currently selected layers, filtering out anything but a text
 * layer
 */
export function getSelectedTextLayers() {
	return selectedLayers.filter(layer => layer.type === "Text");
}

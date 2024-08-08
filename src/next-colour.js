/**
 * Apply the next colour to the text.
 *
 * Font colours are imported based on a given library name. This is required so
 * that all colours can be referenced from any document, even if that document
 * doesn't yet use any of the colours from the library.
 *
 * The sequence of colours is determined by the arrangement of colours in the
 * library - which is usually alphabetical.
 *
 * If no text colour can be found, the colours wrap back to the start of the
 * list.
 *
 * If no colour can be found, a default grey 600 is applied.
 */

const { applyNextColour } = require("./colour");

export default function() {
	applyNextColour();
}

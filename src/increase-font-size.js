/**
 * Apply the next larger text style to the selected layer(s).
 *
 * Font styles are imported based on a given library name. This is required so
 * that all styles can be referenced from any document, even if that document
 * doesn't yet use any of the text styles from the library.
 *
 * The correct sequence of fonts is determined by the font size, regardless of
 * what the styles are named, or what order they appear.
 *
 * If no larger style can be found, no change is made.
 *
 * If no current style is applied, the default, base style is applied.
 */

const { applyNextFontSize } = require("./shared");

export default function() {
	applyNextFontSize();
}

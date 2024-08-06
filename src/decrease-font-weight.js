/**
 * Apply the previous font weight from the defined series of preferred weights.
 * If the current weight isn't in the series, the default "regular" weight is
 * chosen instead.
 */

const { applyNextFontWeight } = require("./weight");

export default function() {
	applyNextFontWeight(true);
}

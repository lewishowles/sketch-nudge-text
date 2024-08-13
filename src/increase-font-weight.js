/**
 * Apply the next font weight from the defined series of preferred weights.
 * If the current weight isn't in the series, the default "regular" weight is
 * chosen instead.
 */

import { applyNextFontWeight } from "./weight";

export default function() {
	applyNextFontWeight();
}

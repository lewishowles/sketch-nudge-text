const UI = require('sketch/ui');

/**
 * Determine whether the given variable is a string and has a non-zero length.
 *
 * @param  {mixed}  variable
 *     The variable to test.
 */
export function isNonEmptyString(variable) {
	return typeof variable === "string" && variable.length > 0;
}

/**
 * Determine whether the given variable is an object and has at least one
 * property.
 *
 * @param  {mixed}  variable
 *     The variable to test.
 */
export function isNonEmptyObject(variable) {
	return !Array.isArray(variable) && variable !== null && typeof variable === "object" && Object.keys(variable).length > 0;
}

/**
 * Determine whether the given variable is an array and has at least one entry.
 *
 * @param  {mixed}  variable
 *     The variable to test.
 */
export function isNonEmptyArray(variable) {
	return Array.isArray(variable) && variable.length > 0;
}

/**
 * Determine whether the given variable is a number, and not NaN.
 *
 * @param  {mixed}  variable
 *     The variable to test.
 */
export function isNumber(variable) {
	return typeof variable === "number" && !isNaN(variable);
}

/**
 * Get the next index, given the current index and the reference list.
 *
 * @param  {number}  index
 *     The current index.
 * @param  {array}  reference
 *     The reference list.
 * @param  {boolean}  options.reverse
 *     Whether to reverse direction, decreasing the index.
 * @param  {boolean}  options.wrap
 *     Whether to wrap to the other end of the list if at the end.
 */
export function getNextIndex(index, reference, { reverse = false, wrap = false } = {}) {
	if (!isNumber(index) || !isNonEmptyArray(reference)) {
		return 0;
	}

	const length = reference.length;

	if (reverse) {
		index--;
	} else {
		index++;
	}

	if (wrap) {
        if (index < 0) {
            return length - 1;
        }

        if (index >= length) {
            return 0;
        }
    } else {
        if (index < 0) {
            return 0;
        }

        if (index >= length) {
            return length - 1;
        }
    }

    return index;
}

/**
 * Display the type of the given variable in a human-friendly way.
 *
 * @param  {mixed}  variable
 *     The variable to display.
 */
export function getFriendlyDisplay(variable) {
	if (variable === null) {
		return "<null>";
	}

	if (variable === undefined) {
		return "<undefined>";
	}

	if (typeof variable === "string") {
		return `${variable} <string>`;
	}

	if (Array.isArray(variable)) {
		return `${variable.map(getFriendlyDisplay).join(", ")} <array[${variable.length}]>`;
	}

	if (typeof variable === "object") {
		return `<object[${Object.keys(variable).length}]>`
	}

	if (variable === NaN) {
		return "<NaN>";
	}

	if (typeof variable === 'number' && Number.isFinite(variable)) {
		return "<number>";
	}
}

/**
 * dd (Die and Display)
 *
 * Display the given message to the user, and throw an error containing that
 * message to halt execution.
 *
 * @param  {string}  message
 *     The message to display to the user.
 */
export function dd(message) {
	if (!isNonEmptyString(message)) {
        dd(`Expected non-empty string <message>, received ${getFriendlyDisplay(message)}.`);
	}

    UI.message(message);

    throw new Error(message);
}

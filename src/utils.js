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
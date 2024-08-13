import UI from "sketch/ui";

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

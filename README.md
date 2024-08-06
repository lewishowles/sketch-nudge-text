# Sketch nudge text

This plugin allows you to "nudge" selected text layers between font sizes, weights, and colours, based on styles defined in various libraries.

This is primarily for my own use, and makes some assumptions based on my preferred way of working.

## Why?

Changing the size, colour, or weight of text is a common task when designing UI, and reaching for the font menu each time slows that process down. Multiply that by dozens of times a day, and it becomes an inefficiency. Being able to assign keyboard shortcuts to the most common tasks also removes the need to take your eyes off the design, making it easier to compare options.

## Changing font size

When changing the size of the selected text layers, the plugin, currently, looks for a library named "Fonts". From that, it retrieves all available shared font styles, sorts them by their font size, and uses that list as a reference.

- When changing font size, it finds the layer's current position in that reference list and selects the next item, depending on direction.
- If the layer is already at the end of the list for the chosen direction, no changes are made.
- If multiple layers are selected, each is treated separately, allowing different sizes to be nudged simultaneously.
- If any of the layers selected don't have an applied text style, a default size—currently 16—will be applied.

For example, if you have text styles named after their text sizes `12`, `14`, `16`, `18` and `20`:

- Selecting a layer with the style `16` applied and increasing the font size will apply the style `18`.
- Selecting a layer with no style applied will select the style `16`.

When changing the style of text, the current colour variable and font weight are re-applied where possible.

## Changing font weight

When changing font weight, a default set of weights is used and the next weight is selected based on the current direction.

Currently, the weights selected are Regular, Medium, Semibold and Bold.

## What next?

- The ability to switch between shades of the current colour, or colours as a whole.
- The library containing the list of available fonts might not be called "Fonts". It would be nice for that name to be set via user command and stored for future use.
- The default size of 16 may not be appropriate for all documents. It would be nice for that size to be set via user command and stored for future use.

## Installation

- Download and unzip the [latest release](../../releases/latest) of the plugin
- Double-click on `sketch-nudge-font-size.sketchplugin`

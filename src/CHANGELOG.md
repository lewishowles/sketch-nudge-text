# Changelog

## v1.0.0

Added four new commands:

- **Next shade** - to select the next (darker) shade of the same colour
- **Previous shade** - to select the previous (lighter) shade of the same colour
- **Next colour** - to select the next text colour from the colour library
- **Previous colour** - to select the previous text colour from the colour library

### Limitations in v1.0.0

Currently, the colours come from a library named "Colours", because that's what mine is called.

## v0.4.1 - 2024/08/06

Fixes an incorrect import path for font size changes that occurred during file restructure.

## v0.4.0 - 2024/08/06

Added two new commands:

- **Increase font weight** - to select the next font weight from a pre-defined list
- **Decrease font weight** - to select the previous font weight from a pre-defined list

### Limitations in v0.4.0

Currently, the list of weights is pre-defined and includes Regular, Medium, Semibold and Bold.

## v0.3.0 - 2024/08/05

- The current text colour variable and font weight are re-applied after choosing the next text style

## v0.2.0 - 2024/08/04

- Improvements to how the plugin appears in the Sketch plugins list

## v.0.1.0 - 2024/08/04

This initial release of Sketch nudge font size adds two commands:

- **Increase font size** - to select the next larger size from the available shared text styles
- **Decrease font size** - to select the next smaller size from the available shared text styles

In both cases:

- If no text style is already selected, the plugin looks for a style with a font size of 16 to apply
- If the current text style is already at the end of the list, based on the current direction, no changes are made

### Limitations in v0.1.0

- The plugin currently expects the library containing the fonts to be named "Fonts", because that's what mine is called.
- The plugin only looks for size 16 as the default.

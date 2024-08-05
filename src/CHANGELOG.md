# Changelog

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

### Limitations

- The plugin currently expects the library containing the fonts to be named "Fonts", because that's what mine is called.
- The plugin only looks for size 16 as the default.

# Nudge font size

The Nudge font size plugin allows you to "nudge" font sizes by selecting an appropriate text style based on a given font library. This allows jumping between a defined set of text styles with a keyboard shortcut.

## Why?

My font library contains the font scale I want to use in my designs. By creating the library, it gives me an easy list to choose from, and means my sizing is always consistent, without having to manually set font sizes. While it isn't much effort to select a new font style from the Appearance dropdown, I'm all about efficiency. I'll often want to nudge text one larger or one smaller on my scale, and opening the menu, finding the right size, and returning to my work takes too long and breaks my flow—especially if I want to alter multiple layers at once.

## How?

The plugin—currently—looks for a library named "Fonts". From that, it retrieves all available shared font styles, sorts them by their font size, and uses that list as a reference.

- When changing font size, it finds the current position in that reference list and selects the next item, depending on direction.
- If the layer is already at the end of the list for the chosen direction, no changes are made.
- If multiple layers are selected, each is treated separately, allowing different sizes to be nudged simultaneously.
- If any of the layers selected don't have an applied text style, a default size—currently 16—will be applied.

## What next?

- For simplicity, my list of font sizes are all a base weight and colour. When nudging, any modifications are lost. It would be nice for those to be re-applied after nudging.
- The library containing the list of available fonts might not be called "Fonts". It would be nice for that name to be set via user command and stored for future use.
- The default size of 16 may not be appropriate for all documents. It would be nice for that size to be set via user command and stored for future use.

## Installation

- [Download](../../releases/latest/download/nudge-font-size.sketchplugin.zip) the latest release of the plugin
- Un-zip
- Double-click on `nudge-font-size.sketchplugin`

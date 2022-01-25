# Polygonjs Plugin Palette Example

This repository shows how to use the [Palette Plugin](https://github.com/polygonjs/plugin-palette) for the WebGL engine [Polygonjs](https://github.com/polygonjs/polygonjs).


**Note that the plugin has now been moved into the core of Polygonjs**, _so there is no need to install the plugin as it is always available_. See [Documentation](https://polygonjs.com/docs/nodes/sop/palette)


This plugin adds a node `SOP/Palette` which adds colors from various palettes to the input points.

![Spheres with colors defined with the Palette node](https://github.com/polygonjs/example-plugin-palette/blob/main/doc/palette_examples.jpg?raw=true)
## Open the scene in the WebGL editor

`yarn && yarn polygon`

and open your browser at:

`http://localhost:8091?scene=default`

This will open the scene saved in this repo. It is a simple scene with a few instanced spheres, whose color is set via the SOP/Palette node.

![Palette plugin from Polygonjs node-based Editor](https://github.com/polygonjs/example-plugin-palette/blob/main/doc/palette_example_in_editor.jpg?raw=true)

<p>
  <img width="274" src="https://github.com/polygonjs/example-plugin-palette/blob/main/doc/plugin-palette.001.gif?raw=true" />
</p>

## Open the export scene without the editor

`yarn && yarn run snowpack dev`

and open your browser at:

`http://localhost:8080`


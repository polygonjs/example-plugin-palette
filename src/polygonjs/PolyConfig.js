import { polyPluginPalette } from "@polygonjs/plugin-palette/dist/src/index";

export function configurePolygonjs(poly) {
	// configure the engine
	poly.registerPlugin(polyPluginPalette);
}
export function configureScene(scene) {
	// configure the scene
}

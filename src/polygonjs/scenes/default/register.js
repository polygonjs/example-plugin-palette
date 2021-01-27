import {Poly} from '@polygonjs/polygonjs/dist/src/engine/Poly';
import {AllExpressionsRegister} from '@polygonjs/polygonjs/dist/src/engine/poly/registers/expressions/All';
import {configurePolygonjs} from '../../PolyConfig';
// event
import {CameraOrbitControlsEventNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/event/CameraOrbitControls';
// mat
import {MeshLambertBuilderMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshLambertBuilder';
import {MeshStandardMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandard';
import {MeshStandardBuilderMatNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/mat/MeshStandardBuilder';
// obj
import {AreaLightObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/AreaLight';
import {GeoObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/Geo';
import {HemisphereLightObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/HemisphereLight';
import {MaterialsObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/Materials';
import {PerspectiveCameraObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/PerspectiveCamera';
import {PolarTransformObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/PolarTransform';
import {SpotLightObjNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/obj/SpotLight';
// sop
import {CopySopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Copy';
import {EventsSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Events';
import {HexagonsSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Hexagons';
import {InstanceSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Instance';
import {MaterialSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Material';
import {PlaneSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Plane';
import {SphereSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Sphere';
import {TransformSopNode} from '@polygonjs/polygonjs/dist/src/engine/nodes/sop/Transform';
export class PolyRegister {
	static run() {
		AllExpressionsRegister.run(Poly);
		// event
		Poly.registerNode(CameraOrbitControlsEventNode);
		// mat
		Poly.registerNode(MeshLambertBuilderMatNode);
		Poly.registerNode(MeshStandardMatNode);
		Poly.registerNode(MeshStandardBuilderMatNode);
		// obj
		Poly.registerNode(AreaLightObjNode);
		Poly.registerNode(GeoObjNode);
		Poly.registerNode(HemisphereLightObjNode);
		Poly.registerNode(MaterialsObjNode);
		Poly.registerNode(PerspectiveCameraObjNode);
		Poly.registerNode(PolarTransformObjNode);
		Poly.registerNode(SpotLightObjNode);
		// sop
		Poly.registerNode(CopySopNode);
		Poly.registerNode(EventsSopNode);
		Poly.registerNode(HexagonsSopNode);
		Poly.registerNode(InstanceSopNode);
		Poly.registerNode(MaterialSopNode);
		Poly.registerNode(PlaneSopNode);
		Poly.registerNode(SphereSopNode);
		Poly.registerNode(TransformSopNode);
		// custom configuration
		configurePolygonjs(Poly);
	}
}

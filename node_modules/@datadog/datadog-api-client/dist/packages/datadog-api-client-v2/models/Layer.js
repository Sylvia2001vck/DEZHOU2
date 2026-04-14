"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layer = void 0;
/**
 * Encapsulates a layer resource, holding attributes like rotation details, plus relationships to the members covering that layer.
 */
class Layer {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Layer.attributeTypeMap;
    }
}
exports.Layer = Layer;
/**
 * @ignore
 */
Layer.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "LayerAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "LayerRelationships",
    },
    type: {
        baseName: "type",
        type: "LayerType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Layer.js.map
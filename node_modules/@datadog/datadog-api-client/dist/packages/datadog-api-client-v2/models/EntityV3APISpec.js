"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityV3APISpec = void 0;
/**
 * The definition of Entity V3 API Spec object.
 */
class EntityV3APISpec {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityV3APISpec.attributeTypeMap;
    }
}
exports.EntityV3APISpec = EntityV3APISpec;
/**
 * @ignore
 */
EntityV3APISpec.attributeTypeMap = {
    implementedBy: {
        baseName: "implementedBy",
        type: "Array<string>",
    },
    _interface: {
        baseName: "interface",
        type: "EntityV3APISpecInterface",
    },
    lifecycle: {
        baseName: "lifecycle",
        type: "string",
    },
    tier: {
        baseName: "tier",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
    },
};
//# sourceMappingURL=EntityV3APISpec.js.map
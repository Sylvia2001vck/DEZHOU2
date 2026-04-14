"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VulnerabilityRelationshipsAffects = void 0;
/**
 * Relationship type.
 */
class VulnerabilityRelationshipsAffects {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return VulnerabilityRelationshipsAffects.attributeTypeMap;
    }
}
exports.VulnerabilityRelationshipsAffects = VulnerabilityRelationshipsAffects;
/**
 * @ignore
 */
VulnerabilityRelationshipsAffects.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "VulnerabilityRelationshipsAffectsData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=VulnerabilityRelationshipsAffects.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VulnerabilityRelationships = void 0;
/**
 * Related entities object.
 */
class VulnerabilityRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return VulnerabilityRelationships.attributeTypeMap;
    }
}
exports.VulnerabilityRelationships = VulnerabilityRelationships;
/**
 * @ignore
 */
VulnerabilityRelationships.attributeTypeMap = {
    affects: {
        baseName: "affects",
        type: "VulnerabilityRelationshipsAffects",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=VulnerabilityRelationships.js.map
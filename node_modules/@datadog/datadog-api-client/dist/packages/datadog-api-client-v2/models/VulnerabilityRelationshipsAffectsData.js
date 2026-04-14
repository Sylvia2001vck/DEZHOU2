"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VulnerabilityRelationshipsAffectsData = void 0;
/**
 * Asset affected by this vulnerability.
 */
class VulnerabilityRelationshipsAffectsData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return VulnerabilityRelationshipsAffectsData.attributeTypeMap;
    }
}
exports.VulnerabilityRelationshipsAffectsData = VulnerabilityRelationshipsAffectsData;
/**
 * @ignore
 */
VulnerabilityRelationshipsAffectsData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "AssetEntityType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=VulnerabilityRelationshipsAffectsData.js.map
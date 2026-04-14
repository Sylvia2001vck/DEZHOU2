"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToIncidentImpactData = void 0;
/**
 * Relationship to impact object.
 */
class RelationshipToIncidentImpactData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToIncidentImpactData.attributeTypeMap;
    }
}
exports.RelationshipToIncidentImpactData = RelationshipToIncidentImpactData;
/**
 * @ignore
 */
RelationshipToIncidentImpactData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "IncidentImpactsType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToIncidentImpactData.js.map
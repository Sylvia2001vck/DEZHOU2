"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToIncidentRequest = void 0;
/**
 * Relationship to incident request
 */
class RelationshipToIncidentRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToIncidentRequest.attributeTypeMap;
    }
}
exports.RelationshipToIncidentRequest = RelationshipToIncidentRequest;
/**
 * @ignore
 */
RelationshipToIncidentRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentRelationshipData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToIncidentRequest.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToIncidentType = void 0;
/**
 * Relationship to an incident type.
 */
class RelationshipToIncidentType {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToIncidentType.attributeTypeMap;
    }
}
exports.RelationshipToIncidentType = RelationshipToIncidentType;
/**
 * @ignore
 */
RelationshipToIncidentType.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RelationshipToIncidentTypeData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToIncidentType.js.map
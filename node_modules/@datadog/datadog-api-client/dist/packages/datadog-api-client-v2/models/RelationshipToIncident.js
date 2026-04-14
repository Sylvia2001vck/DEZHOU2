"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToIncident = void 0;
/**
 * Relationship to incident.
 */
class RelationshipToIncident {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToIncident.attributeTypeMap;
    }
}
exports.RelationshipToIncident = RelationshipToIncident;
/**
 * @ignore
 */
RelationshipToIncident.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RelationshipToIncidentData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToIncident.js.map
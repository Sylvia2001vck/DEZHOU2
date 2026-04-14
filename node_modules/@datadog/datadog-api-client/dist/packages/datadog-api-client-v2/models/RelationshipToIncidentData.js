"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToIncidentData = void 0;
/**
 * Relationship to incident object.
 */
class RelationshipToIncidentData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToIncidentData.attributeTypeMap;
    }
}
exports.RelationshipToIncidentData = RelationshipToIncidentData;
/**
 * @ignore
 */
RelationshipToIncidentData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "IncidentType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToIncidentData.js.map
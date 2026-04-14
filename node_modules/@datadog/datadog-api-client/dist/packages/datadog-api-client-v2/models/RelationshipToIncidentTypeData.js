"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToIncidentTypeData = void 0;
/**
 * Relationship to incident type object.
 */
class RelationshipToIncidentTypeData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToIncidentTypeData.attributeTypeMap;
    }
}
exports.RelationshipToIncidentTypeData = RelationshipToIncidentTypeData;
/**
 * @ignore
 */
RelationshipToIncidentTypeData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "IncidentTypeType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToIncidentTypeData.js.map
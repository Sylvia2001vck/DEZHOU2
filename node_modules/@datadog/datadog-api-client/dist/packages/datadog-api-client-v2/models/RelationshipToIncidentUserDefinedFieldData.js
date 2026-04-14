"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToIncidentUserDefinedFieldData = void 0;
/**
 * Relationship to impact object.
 */
class RelationshipToIncidentUserDefinedFieldData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToIncidentUserDefinedFieldData.attributeTypeMap;
    }
}
exports.RelationshipToIncidentUserDefinedFieldData = RelationshipToIncidentUserDefinedFieldData;
/**
 * @ignore
 */
RelationshipToIncidentUserDefinedFieldData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "IncidentUserDefinedFieldType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToIncidentUserDefinedFieldData.js.map
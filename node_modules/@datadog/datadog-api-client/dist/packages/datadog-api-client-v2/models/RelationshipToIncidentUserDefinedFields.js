"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToIncidentUserDefinedFields = void 0;
/**
 * Relationship to incident user defined fields.
 */
class RelationshipToIncidentUserDefinedFields {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToIncidentUserDefinedFields.attributeTypeMap;
    }
}
exports.RelationshipToIncidentUserDefinedFields = RelationshipToIncidentUserDefinedFields;
/**
 * @ignore
 */
RelationshipToIncidentUserDefinedFields.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<RelationshipToIncidentUserDefinedFieldData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToIncidentUserDefinedFields.js.map
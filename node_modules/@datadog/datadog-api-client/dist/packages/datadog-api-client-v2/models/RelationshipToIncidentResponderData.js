"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToIncidentResponderData = void 0;
/**
 * Relationship to impact object.
 */
class RelationshipToIncidentResponderData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToIncidentResponderData.attributeTypeMap;
    }
}
exports.RelationshipToIncidentResponderData = RelationshipToIncidentResponderData;
/**
 * @ignore
 */
RelationshipToIncidentResponderData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "IncidentRespondersType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToIncidentResponderData.js.map
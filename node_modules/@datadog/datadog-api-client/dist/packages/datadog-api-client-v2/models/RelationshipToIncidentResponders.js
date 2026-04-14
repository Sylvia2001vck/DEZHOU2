"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToIncidentResponders = void 0;
/**
 * Relationship to incident responders.
 */
class RelationshipToIncidentResponders {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToIncidentResponders.attributeTypeMap;
    }
}
exports.RelationshipToIncidentResponders = RelationshipToIncidentResponders;
/**
 * @ignore
 */
RelationshipToIncidentResponders.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<RelationshipToIncidentResponderData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToIncidentResponders.js.map
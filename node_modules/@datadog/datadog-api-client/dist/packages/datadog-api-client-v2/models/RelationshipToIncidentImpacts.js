"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToIncidentImpacts = void 0;
/**
 * Relationship to impacts.
 */
class RelationshipToIncidentImpacts {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToIncidentImpacts.attributeTypeMap;
    }
}
exports.RelationshipToIncidentImpacts = RelationshipToIncidentImpacts;
/**
 * @ignore
 */
RelationshipToIncidentImpacts.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<RelationshipToIncidentImpactData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToIncidentImpacts.js.map
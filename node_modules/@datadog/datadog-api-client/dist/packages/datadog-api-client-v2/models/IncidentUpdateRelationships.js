"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentUpdateRelationships = void 0;
/**
 * The incident's relationships for an update request.
 */
class IncidentUpdateRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentUpdateRelationships.attributeTypeMap;
    }
}
exports.IncidentUpdateRelationships = IncidentUpdateRelationships;
/**
 * @ignore
 */
IncidentUpdateRelationships.attributeTypeMap = {
    commanderUser: {
        baseName: "commander_user",
        type: "NullableRelationshipToUser",
    },
    integrations: {
        baseName: "integrations",
        type: "RelationshipToIncidentIntegrationMetadatas",
    },
    postmortem: {
        baseName: "postmortem",
        type: "RelationshipToIncidentPostmortem",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentUpdateRelationships.js.map
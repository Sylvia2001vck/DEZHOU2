"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentCreateRelationships = void 0;
/**
 * The relationships the incident will have with other resources once created.
 */
class IncidentCreateRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentCreateRelationships.attributeTypeMap;
    }
}
exports.IncidentCreateRelationships = IncidentCreateRelationships;
/**
 * @ignore
 */
IncidentCreateRelationships.attributeTypeMap = {
    commanderUser: {
        baseName: "commander_user",
        type: "NullableRelationshipToUser",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentCreateRelationships.js.map
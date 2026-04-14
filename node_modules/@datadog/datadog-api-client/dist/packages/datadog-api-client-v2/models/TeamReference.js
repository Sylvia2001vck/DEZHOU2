"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamReference = void 0;
/**
 * Provides a reference to a team, including ID, type, and basic attributes/relationships.
 */
class TeamReference {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamReference.attributeTypeMap;
    }
}
exports.TeamReference = TeamReference;
/**
 * @ignore
 */
TeamReference.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "TeamReferenceAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "TeamReferenceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamReference.js.map
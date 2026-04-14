"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTeamResponseData = void 0;
/**
 * Incident Team data from a response.
 */
class IncidentTeamResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTeamResponseData.attributeTypeMap;
    }
}
exports.IncidentTeamResponseData = IncidentTeamResponseData;
/**
 * @ignore
 */
IncidentTeamResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentTeamResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "IncidentTeamRelationships",
    },
    type: {
        baseName: "type",
        type: "IncidentTeamType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentTeamResponseData.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTeamCreateData = void 0;
/**
 * Incident Team data for a create request.
 */
class IncidentTeamCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTeamCreateData.attributeTypeMap;
    }
}
exports.IncidentTeamCreateData = IncidentTeamCreateData;
/**
 * @ignore
 */
IncidentTeamCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentTeamCreateAttributes",
    },
    relationships: {
        baseName: "relationships",
        type: "IncidentTeamRelationships",
    },
    type: {
        baseName: "type",
        type: "IncidentTeamType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentTeamCreateData.js.map
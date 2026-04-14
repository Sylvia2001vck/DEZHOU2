"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTeamUpdateData = void 0;
/**
 * Incident Team data for an update request.
 */
class IncidentTeamUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTeamUpdateData.attributeTypeMap;
    }
}
exports.IncidentTeamUpdateData = IncidentTeamUpdateData;
/**
 * @ignore
 */
IncidentTeamUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentTeamUpdateAttributes",
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
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentTeamUpdateData.js.map
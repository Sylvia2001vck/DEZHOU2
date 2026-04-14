"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTeamCreateRequest = void 0;
/**
 * Create request with an incident team payload.
 */
class IncidentTeamCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTeamCreateRequest.attributeTypeMap;
    }
}
exports.IncidentTeamCreateRequest = IncidentTeamCreateRequest;
/**
 * @ignore
 */
IncidentTeamCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentTeamCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentTeamCreateRequest.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTeamUpdateRequest = void 0;
/**
 * Update request with an incident team payload.
 */
class IncidentTeamUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTeamUpdateRequest.attributeTypeMap;
    }
}
exports.IncidentTeamUpdateRequest = IncidentTeamUpdateRequest;
/**
 * @ignore
 */
IncidentTeamUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentTeamUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentTeamUpdateRequest.js.map
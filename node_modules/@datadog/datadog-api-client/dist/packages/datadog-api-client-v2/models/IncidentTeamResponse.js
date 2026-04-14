"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTeamResponse = void 0;
/**
 * Response with an incident team payload.
 */
class IncidentTeamResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTeamResponse.attributeTypeMap;
    }
}
exports.IncidentTeamResponse = IncidentTeamResponse;
/**
 * @ignore
 */
IncidentTeamResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentTeamResponseData",
        required: true,
    },
    included: {
        baseName: "included",
        type: "Array<IncidentTeamIncludedItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentTeamResponse.js.map
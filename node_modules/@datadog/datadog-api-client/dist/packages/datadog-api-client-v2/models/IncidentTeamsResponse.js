"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTeamsResponse = void 0;
/**
 * Response with a list of incident team payloads.
 */
class IncidentTeamsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTeamsResponse.attributeTypeMap;
    }
}
exports.IncidentTeamsResponse = IncidentTeamsResponse;
/**
 * @ignore
 */
IncidentTeamsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<IncidentTeamResponseData>",
        required: true,
    },
    included: {
        baseName: "included",
        type: "Array<IncidentTeamIncludedItems>",
    },
    meta: {
        baseName: "meta",
        type: "IncidentResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentTeamsResponse.js.map
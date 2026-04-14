"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentsResponse = void 0;
/**
 * Response with a list of incidents.
 */
class IncidentsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentsResponse.attributeTypeMap;
    }
}
exports.IncidentsResponse = IncidentsResponse;
/**
 * @ignore
 */
IncidentsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<IncidentResponseData>",
        required: true,
    },
    included: {
        baseName: "included",
        type: "Array<IncidentResponseIncludedItem>",
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
//# sourceMappingURL=IncidentsResponse.js.map
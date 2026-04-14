"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentSearchResponse = void 0;
/**
 * Response with incidents and facets.
 */
class IncidentSearchResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentSearchResponse.attributeTypeMap;
    }
}
exports.IncidentSearchResponse = IncidentSearchResponse;
/**
 * @ignore
 */
IncidentSearchResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentSearchResponseData",
        required: true,
    },
    included: {
        baseName: "included",
        type: "Array<IncidentResponseIncludedItem>",
    },
    meta: {
        baseName: "meta",
        type: "IncidentSearchResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentSearchResponse.js.map
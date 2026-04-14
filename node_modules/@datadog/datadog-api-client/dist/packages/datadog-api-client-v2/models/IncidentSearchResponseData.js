"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentSearchResponseData = void 0;
/**
 * Data returned by an incident search.
 */
class IncidentSearchResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentSearchResponseData.attributeTypeMap;
    }
}
exports.IncidentSearchResponseData = IncidentSearchResponseData;
/**
 * @ignore
 */
IncidentSearchResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentSearchResponseAttributes",
    },
    type: {
        baseName: "type",
        type: "IncidentSearchResultsType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentSearchResponseData.js.map
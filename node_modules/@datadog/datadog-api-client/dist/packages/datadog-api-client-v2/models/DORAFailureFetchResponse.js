"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DORAFailureFetchResponse = void 0;
/**
 * Response for fetching a single incident event.
 */
class DORAFailureFetchResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DORAFailureFetchResponse.attributeTypeMap;
    }
}
exports.DORAFailureFetchResponse = DORAFailureFetchResponse;
/**
 * @ignore
 */
DORAFailureFetchResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DORAIncidentObject",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DORAFailureFetchResponse.js.map
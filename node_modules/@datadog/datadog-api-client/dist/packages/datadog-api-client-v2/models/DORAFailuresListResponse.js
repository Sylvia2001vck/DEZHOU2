"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DORAFailuresListResponse = void 0;
/**
 * Response for the list incidents endpoint.
 */
class DORAFailuresListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DORAFailuresListResponse.attributeTypeMap;
    }
}
exports.DORAFailuresListResponse = DORAFailuresListResponse;
/**
 * @ignore
 */
DORAFailuresListResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<DORAIncidentObject>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DORAFailuresListResponse.js.map
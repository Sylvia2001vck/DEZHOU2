"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DORADeploymentFetchResponse = void 0;
/**
 * Response for fetching a single deployment event.
 */
class DORADeploymentFetchResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DORADeploymentFetchResponse.attributeTypeMap;
    }
}
exports.DORADeploymentFetchResponse = DORADeploymentFetchResponse;
/**
 * @ignore
 */
DORADeploymentFetchResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DORADeploymentObject",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DORADeploymentFetchResponse.js.map
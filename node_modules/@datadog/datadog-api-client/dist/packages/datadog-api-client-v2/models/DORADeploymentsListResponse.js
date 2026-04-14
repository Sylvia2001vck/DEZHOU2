"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DORADeploymentsListResponse = void 0;
/**
 * Response for the list deployments endpoint.
 */
class DORADeploymentsListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DORADeploymentsListResponse.attributeTypeMap;
    }
}
exports.DORADeploymentsListResponse = DORADeploymentsListResponse;
/**
 * @ignore
 */
DORADeploymentsListResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<DORADeploymentObject>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DORADeploymentsListResponse.js.map
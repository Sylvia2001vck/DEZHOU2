"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DORAListDeploymentsRequest = void 0;
/**
 * Request to get a list of deployments.
 */
class DORAListDeploymentsRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DORAListDeploymentsRequest.attributeTypeMap;
    }
}
exports.DORAListDeploymentsRequest = DORAListDeploymentsRequest;
/**
 * @ignore
 */
DORAListDeploymentsRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DORAListDeploymentsRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DORAListDeploymentsRequest.js.map
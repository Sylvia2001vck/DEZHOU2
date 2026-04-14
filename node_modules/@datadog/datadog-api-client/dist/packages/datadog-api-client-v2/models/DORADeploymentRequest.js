"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DORADeploymentRequest = void 0;
/**
 * Request to create a DORA deployment event.
 */
class DORADeploymentRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DORADeploymentRequest.attributeTypeMap;
    }
}
exports.DORADeploymentRequest = DORADeploymentRequest;
/**
 * @ignore
 */
DORADeploymentRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DORADeploymentRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DORADeploymentRequest.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DORADeploymentResponse = void 0;
/**
 * Response after receiving a DORA deployment event.
 */
class DORADeploymentResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DORADeploymentResponse.attributeTypeMap;
    }
}
exports.DORADeploymentResponse = DORADeploymentResponse;
/**
 * @ignore
 */
DORADeploymentResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DORADeploymentResponseData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DORADeploymentResponse.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DORADeploymentPatchRequest = void 0;
/**
 * Request to patch a DORA deployment event.
 */
class DORADeploymentPatchRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DORADeploymentPatchRequest.attributeTypeMap;
    }
}
exports.DORADeploymentPatchRequest = DORADeploymentPatchRequest;
/**
 * @ignore
 */
DORADeploymentPatchRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DORADeploymentPatchRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DORADeploymentPatchRequest.js.map
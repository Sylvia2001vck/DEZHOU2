"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DORADeploymentPatchRequestData = void 0;
/**
 * The JSON:API data for patching a deployment.
 */
class DORADeploymentPatchRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DORADeploymentPatchRequestData.attributeTypeMap;
    }
}
exports.DORADeploymentPatchRequestData = DORADeploymentPatchRequestData;
/**
 * @ignore
 */
DORADeploymentPatchRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "DORADeploymentPatchRequestAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "DORADeploymentPatchRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DORADeploymentPatchRequestData.js.map
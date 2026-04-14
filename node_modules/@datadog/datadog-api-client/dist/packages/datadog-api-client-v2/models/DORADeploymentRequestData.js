"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DORADeploymentRequestData = void 0;
/**
 * The JSON:API data.
 */
class DORADeploymentRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DORADeploymentRequestData.attributeTypeMap;
    }
}
exports.DORADeploymentRequestData = DORADeploymentRequestData;
/**
 * @ignore
 */
DORADeploymentRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "DORADeploymentRequestAttributes",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DORADeploymentRequestData.js.map
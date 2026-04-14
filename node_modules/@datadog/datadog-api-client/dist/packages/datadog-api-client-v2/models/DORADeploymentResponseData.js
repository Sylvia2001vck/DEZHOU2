"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DORADeploymentResponseData = void 0;
/**
 * The JSON:API data.
 */
class DORADeploymentResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DORADeploymentResponseData.attributeTypeMap;
    }
}
exports.DORADeploymentResponseData = DORADeploymentResponseData;
/**
 * @ignore
 */
DORADeploymentResponseData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "DORADeploymentType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DORADeploymentResponseData.js.map
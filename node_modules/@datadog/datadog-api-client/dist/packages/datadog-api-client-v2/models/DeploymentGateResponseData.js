"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploymentGateResponseData = void 0;
/**
 * Data for a deployment gate.
 */
class DeploymentGateResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeploymentGateResponseData.attributeTypeMap;
    }
}
exports.DeploymentGateResponseData = DeploymentGateResponseData;
/**
 * @ignore
 */
DeploymentGateResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "DeploymentGateResponseDataAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "DeploymentGateDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeploymentGateResponseData.js.map
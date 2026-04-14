"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploymentGateResponse = void 0;
/**
 * Response for a deployment gate.
 */
class DeploymentGateResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeploymentGateResponse.attributeTypeMap;
    }
}
exports.DeploymentGateResponse = DeploymentGateResponse;
/**
 * @ignore
 */
DeploymentGateResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DeploymentGateResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeploymentGateResponse.js.map
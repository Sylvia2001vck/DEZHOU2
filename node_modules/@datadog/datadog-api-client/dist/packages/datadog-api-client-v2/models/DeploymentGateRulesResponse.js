"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploymentGateRulesResponse = void 0;
/**
 * Response for a deployment gate rules.
 */
class DeploymentGateRulesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeploymentGateRulesResponse.attributeTypeMap;
    }
}
exports.DeploymentGateRulesResponse = DeploymentGateRulesResponse;
/**
 * @ignore
 */
DeploymentGateRulesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ListDeploymentRuleResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeploymentGateRulesResponse.js.map
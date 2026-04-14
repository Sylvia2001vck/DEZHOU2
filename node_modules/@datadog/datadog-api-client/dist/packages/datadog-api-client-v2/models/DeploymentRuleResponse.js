"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploymentRuleResponse = void 0;
/**
 * Response for a deployment rule.
 */
class DeploymentRuleResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeploymentRuleResponse.attributeTypeMap;
    }
}
exports.DeploymentRuleResponse = DeploymentRuleResponse;
/**
 * @ignore
 */
DeploymentRuleResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DeploymentRuleResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeploymentRuleResponse.js.map
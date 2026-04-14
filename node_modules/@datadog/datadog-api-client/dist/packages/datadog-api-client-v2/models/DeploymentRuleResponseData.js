"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploymentRuleResponseData = void 0;
/**
 * Data for a deployment rule.
 */
class DeploymentRuleResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeploymentRuleResponseData.attributeTypeMap;
    }
}
exports.DeploymentRuleResponseData = DeploymentRuleResponseData;
/**
 * @ignore
 */
DeploymentRuleResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "DeploymentRuleResponseDataAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "DeploymentRuleDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeploymentRuleResponseData.js.map
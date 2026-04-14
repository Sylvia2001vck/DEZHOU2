"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDeploymentRulesResponseDataAttributes = void 0;
class ListDeploymentRulesResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListDeploymentRulesResponseDataAttributes.attributeTypeMap;
    }
}
exports.ListDeploymentRulesResponseDataAttributes = ListDeploymentRulesResponseDataAttributes;
/**
 * @ignore
 */
ListDeploymentRulesResponseDataAttributes.attributeTypeMap = {
    rules: {
        baseName: "rules",
        type: "Array<DeploymentRuleResponseDataAttributes>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListDeploymentRulesResponseDataAttributes.js.map
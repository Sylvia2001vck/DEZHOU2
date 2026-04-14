"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDeploymentRuleResponseData = void 0;
/**
 * Data for a list of deployment rules.
 */
class ListDeploymentRuleResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListDeploymentRuleResponseData.attributeTypeMap;
    }
}
exports.ListDeploymentRuleResponseData = ListDeploymentRuleResponseData;
/**
 * @ignore
 */
ListDeploymentRuleResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ListDeploymentRulesResponseDataAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ListDeploymentRulesDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListDeploymentRuleResponseData.js.map
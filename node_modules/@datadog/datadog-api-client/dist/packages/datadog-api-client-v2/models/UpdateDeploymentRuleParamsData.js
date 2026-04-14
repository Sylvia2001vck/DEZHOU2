"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDeploymentRuleParamsData = void 0;
/**
 * Parameters for updating a deployment rule.
 */
class UpdateDeploymentRuleParamsData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateDeploymentRuleParamsData.attributeTypeMap;
    }
}
exports.UpdateDeploymentRuleParamsData = UpdateDeploymentRuleParamsData;
/**
 * @ignore
 */
UpdateDeploymentRuleParamsData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "UpdateDeploymentRuleParamsDataAttributes",
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
//# sourceMappingURL=UpdateDeploymentRuleParamsData.js.map
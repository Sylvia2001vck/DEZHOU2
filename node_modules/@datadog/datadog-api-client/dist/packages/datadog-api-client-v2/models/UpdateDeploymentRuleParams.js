"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDeploymentRuleParams = void 0;
/**
 * Parameters for updating a deployment rule.
 */
class UpdateDeploymentRuleParams {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateDeploymentRuleParams.attributeTypeMap;
    }
}
exports.UpdateDeploymentRuleParams = UpdateDeploymentRuleParams;
/**
 * @ignore
 */
UpdateDeploymentRuleParams.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "UpdateDeploymentRuleParamsData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateDeploymentRuleParams.js.map
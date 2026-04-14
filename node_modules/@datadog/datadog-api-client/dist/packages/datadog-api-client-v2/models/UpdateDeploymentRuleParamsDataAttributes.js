"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDeploymentRuleParamsDataAttributes = void 0;
/**
 * Parameters for updating a deployment rule.
 */
class UpdateDeploymentRuleParamsDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateDeploymentRuleParamsDataAttributes.attributeTypeMap;
    }
}
exports.UpdateDeploymentRuleParamsDataAttributes = UpdateDeploymentRuleParamsDataAttributes;
/**
 * @ignore
 */
UpdateDeploymentRuleParamsDataAttributes.attributeTypeMap = {
    dryRun: {
        baseName: "dry_run",
        type: "boolean",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    options: {
        baseName: "options",
        type: "DeploymentRulesOptions",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateDeploymentRuleParamsDataAttributes.js.map
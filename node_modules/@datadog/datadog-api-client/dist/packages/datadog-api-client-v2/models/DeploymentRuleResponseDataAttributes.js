"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploymentRuleResponseDataAttributes = void 0;
/**
 * Basic information about a deployment rule.
 */
class DeploymentRuleResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeploymentRuleResponseDataAttributes.attributeTypeMap;
    }
}
exports.DeploymentRuleResponseDataAttributes = DeploymentRuleResponseDataAttributes;
/**
 * @ignore
 */
DeploymentRuleResponseDataAttributes.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "Date",
        required: true,
        format: "date-time",
    },
    createdBy: {
        baseName: "created_by",
        type: "DeploymentRuleResponseDataAttributesCreatedBy",
        required: true,
    },
    dryRun: {
        baseName: "dry_run",
        type: "boolean",
        required: true,
    },
    gateId: {
        baseName: "gate_id",
        type: "string",
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
    type: {
        baseName: "type",
        type: "DeploymentRuleResponseDataAttributesType",
        required: true,
    },
    updatedAt: {
        baseName: "updated_at",
        type: "Date",
        format: "date-time",
    },
    updatedBy: {
        baseName: "updated_by",
        type: "DeploymentRuleResponseDataAttributesUpdatedBy",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeploymentRuleResponseDataAttributes.js.map
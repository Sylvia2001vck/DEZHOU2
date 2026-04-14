"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploymentRuleResponseDataAttributesCreatedBy = void 0;
/**
 * Information about the user who created the deployment rule.
 */
class DeploymentRuleResponseDataAttributesCreatedBy {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeploymentRuleResponseDataAttributesCreatedBy.attributeTypeMap;
    }
}
exports.DeploymentRuleResponseDataAttributesCreatedBy = DeploymentRuleResponseDataAttributesCreatedBy;
/**
 * @ignore
 */
DeploymentRuleResponseDataAttributesCreatedBy.attributeTypeMap = {
    handle: {
        baseName: "handle",
        type: "string",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeploymentRuleResponseDataAttributesCreatedBy.js.map
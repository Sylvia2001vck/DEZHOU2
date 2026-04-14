"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploymentRuleOptionsFaultyDeploymentDetection = void 0;
/**
 * Faulty deployment detection options for deployment rules.
 */
class DeploymentRuleOptionsFaultyDeploymentDetection {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeploymentRuleOptionsFaultyDeploymentDetection.attributeTypeMap;
    }
}
exports.DeploymentRuleOptionsFaultyDeploymentDetection = DeploymentRuleOptionsFaultyDeploymentDetection;
/**
 * @ignore
 */
DeploymentRuleOptionsFaultyDeploymentDetection.attributeTypeMap = {
    duration: {
        baseName: "duration",
        type: "number",
        format: "int64",
    },
    excludedResources: {
        baseName: "excluded_resources",
        type: "Array<string>",
    },
};
//# sourceMappingURL=DeploymentRuleOptionsFaultyDeploymentDetection.js.map
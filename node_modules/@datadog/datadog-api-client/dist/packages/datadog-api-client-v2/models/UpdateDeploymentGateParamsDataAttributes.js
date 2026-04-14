"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDeploymentGateParamsDataAttributes = void 0;
/**
 * Attributes for updating a deployment gate.
 */
class UpdateDeploymentGateParamsDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateDeploymentGateParamsDataAttributes.attributeTypeMap;
    }
}
exports.UpdateDeploymentGateParamsDataAttributes = UpdateDeploymentGateParamsDataAttributes;
/**
 * @ignore
 */
UpdateDeploymentGateParamsDataAttributes.attributeTypeMap = {
    dryRun: {
        baseName: "dry_run",
        type: "boolean",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateDeploymentGateParamsDataAttributes.js.map
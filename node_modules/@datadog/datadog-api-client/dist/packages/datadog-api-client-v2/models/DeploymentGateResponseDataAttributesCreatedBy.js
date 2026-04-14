"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploymentGateResponseDataAttributesCreatedBy = void 0;
/**
 * Information about the user who created the deployment gate.
 */
class DeploymentGateResponseDataAttributesCreatedBy {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeploymentGateResponseDataAttributesCreatedBy.attributeTypeMap;
    }
}
exports.DeploymentGateResponseDataAttributesCreatedBy = DeploymentGateResponseDataAttributesCreatedBy;
/**
 * @ignore
 */
DeploymentGateResponseDataAttributesCreatedBy.attributeTypeMap = {
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
//# sourceMappingURL=DeploymentGateResponseDataAttributesCreatedBy.js.map
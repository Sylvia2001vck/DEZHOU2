"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploymentGateResponseDataAttributesUpdatedBy = void 0;
/**
 * Information about the user who updated the deployment gate.
 */
class DeploymentGateResponseDataAttributesUpdatedBy {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeploymentGateResponseDataAttributesUpdatedBy.attributeTypeMap;
    }
}
exports.DeploymentGateResponseDataAttributesUpdatedBy = DeploymentGateResponseDataAttributesUpdatedBy;
/**
 * @ignore
 */
DeploymentGateResponseDataAttributesUpdatedBy.attributeTypeMap = {
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
//# sourceMappingURL=DeploymentGateResponseDataAttributesUpdatedBy.js.map
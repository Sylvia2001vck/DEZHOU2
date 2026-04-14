"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploymentAttributes = void 0;
/**
 * The attributes object containing the version ID of the published app.
 */
class DeploymentAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeploymentAttributes.attributeTypeMap;
    }
}
exports.DeploymentAttributes = DeploymentAttributes;
/**
 * @ignore
 */
DeploymentAttributes.attributeTypeMap = {
    appVersionId: {
        baseName: "app_version_id",
        type: "string",
        format: "uuid",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeploymentAttributes.js.map
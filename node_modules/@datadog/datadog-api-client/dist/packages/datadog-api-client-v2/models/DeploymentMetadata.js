"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeploymentMetadata = void 0;
/**
 * Metadata object containing the publication creation information.
 */
class DeploymentMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeploymentMetadata.attributeTypeMap;
    }
}
exports.DeploymentMetadata = DeploymentMetadata;
/**
 * @ignore
 */
DeploymentMetadata.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    userId: {
        baseName: "user_id",
        type: "number",
        format: "int64",
    },
    userName: {
        baseName: "user_name",
        type: "string",
    },
    userUuid: {
        baseName: "user_uuid",
        type: "string",
        format: "uuid",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeploymentMetadata.js.map
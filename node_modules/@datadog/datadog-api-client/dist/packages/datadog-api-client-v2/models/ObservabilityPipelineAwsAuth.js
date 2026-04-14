"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineAwsAuth = void 0;
/**
 * AWS authentication credentials used for accessing AWS services such as S3.
 * If omitted, the system’s default credentials are used (for example, the IAM role and environment variables).
 */
class ObservabilityPipelineAwsAuth {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineAwsAuth.attributeTypeMap;
    }
}
exports.ObservabilityPipelineAwsAuth = ObservabilityPipelineAwsAuth;
/**
 * @ignore
 */
ObservabilityPipelineAwsAuth.attributeTypeMap = {
    assumeRole: {
        baseName: "assume_role",
        type: "string",
    },
    externalId: {
        baseName: "external_id",
        type: "string",
    },
    sessionName: {
        baseName: "session_name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineAwsAuth.js.map
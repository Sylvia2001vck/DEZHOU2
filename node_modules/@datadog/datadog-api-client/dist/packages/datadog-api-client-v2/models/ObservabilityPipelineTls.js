"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservabilityPipelineTls = void 0;
/**
 * Configuration for enabling TLS encryption between the pipeline component and external services.
 */
class ObservabilityPipelineTls {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ObservabilityPipelineTls.attributeTypeMap;
    }
}
exports.ObservabilityPipelineTls = ObservabilityPipelineTls;
/**
 * @ignore
 */
ObservabilityPipelineTls.attributeTypeMap = {
    caFile: {
        baseName: "ca_file",
        type: "string",
    },
    crtFile: {
        baseName: "crt_file",
        type: "string",
        required: true,
    },
    keyFile: {
        baseName: "key_file",
        type: "string",
    },
    keyPassKey: {
        baseName: "key_pass_key",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ObservabilityPipelineTls.js.map
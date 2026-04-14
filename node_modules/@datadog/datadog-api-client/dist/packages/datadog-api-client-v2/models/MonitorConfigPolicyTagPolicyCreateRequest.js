"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorConfigPolicyTagPolicyCreateRequest = void 0;
/**
 * Tag attributes of a monitor configuration policy.
 */
class MonitorConfigPolicyTagPolicyCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorConfigPolicyTagPolicyCreateRequest.attributeTypeMap;
    }
}
exports.MonitorConfigPolicyTagPolicyCreateRequest = MonitorConfigPolicyTagPolicyCreateRequest;
/**
 * @ignore
 */
MonitorConfigPolicyTagPolicyCreateRequest.attributeTypeMap = {
    tagKey: {
        baseName: "tag_key",
        type: "string",
        required: true,
    },
    tagKeyRequired: {
        baseName: "tag_key_required",
        type: "boolean",
        required: true,
    },
    validTagValues: {
        baseName: "valid_tag_values",
        type: "Array<string>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorConfigPolicyTagPolicyCreateRequest.js.map
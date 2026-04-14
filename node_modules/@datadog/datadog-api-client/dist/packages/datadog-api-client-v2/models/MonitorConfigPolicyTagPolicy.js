"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorConfigPolicyTagPolicy = void 0;
/**
 * Tag attributes of a monitor configuration policy.
 */
class MonitorConfigPolicyTagPolicy {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorConfigPolicyTagPolicy.attributeTypeMap;
    }
}
exports.MonitorConfigPolicyTagPolicy = MonitorConfigPolicyTagPolicy;
/**
 * @ignore
 */
MonitorConfigPolicyTagPolicy.attributeTypeMap = {
    tagKey: {
        baseName: "tag_key",
        type: "string",
    },
    tagKeyRequired: {
        baseName: "tag_key_required",
        type: "boolean",
    },
    validTagValues: {
        baseName: "valid_tag_values",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorConfigPolicyTagPolicy.js.map
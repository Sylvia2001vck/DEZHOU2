"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscalationPolicyDataAttributes = void 0;
/**
 * Defines the main attributes of an escalation policy, such as its name and behavior on policy end.
 */
class EscalationPolicyDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EscalationPolicyDataAttributes.attributeTypeMap;
    }
}
exports.EscalationPolicyDataAttributes = EscalationPolicyDataAttributes;
/**
 * @ignore
 */
EscalationPolicyDataAttributes.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    resolvePageOnPolicyEnd: {
        baseName: "resolve_page_on_policy_end",
        type: "boolean",
    },
    retries: {
        baseName: "retries",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EscalationPolicyDataAttributes.js.map
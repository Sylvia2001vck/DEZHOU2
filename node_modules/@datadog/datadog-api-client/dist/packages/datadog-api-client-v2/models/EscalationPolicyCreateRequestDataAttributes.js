"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscalationPolicyCreateRequestDataAttributes = void 0;
/**
 * Defines the attributes for creating an escalation policy, including its description, name, resolution behavior, retries, and steps.
 */
class EscalationPolicyCreateRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EscalationPolicyCreateRequestDataAttributes.attributeTypeMap;
    }
}
exports.EscalationPolicyCreateRequestDataAttributes = EscalationPolicyCreateRequestDataAttributes;
/**
 * @ignore
 */
EscalationPolicyCreateRequestDataAttributes.attributeTypeMap = {
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
    steps: {
        baseName: "steps",
        type: "Array<EscalationPolicyCreateRequestDataAttributesStepsItems>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EscalationPolicyCreateRequestDataAttributes.js.map
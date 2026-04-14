"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscalationPolicyUpdateRequestDataAttributes = void 0;
/**
 * Defines the attributes that can be updated for an escalation policy, such as description, name, resolution behavior, retries, and steps.
 */
class EscalationPolicyUpdateRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EscalationPolicyUpdateRequestDataAttributes.attributeTypeMap;
    }
}
exports.EscalationPolicyUpdateRequestDataAttributes = EscalationPolicyUpdateRequestDataAttributes;
/**
 * @ignore
 */
EscalationPolicyUpdateRequestDataAttributes.attributeTypeMap = {
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
        type: "Array<EscalationPolicyUpdateRequestDataAttributesStepsItems>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EscalationPolicyUpdateRequestDataAttributes.js.map
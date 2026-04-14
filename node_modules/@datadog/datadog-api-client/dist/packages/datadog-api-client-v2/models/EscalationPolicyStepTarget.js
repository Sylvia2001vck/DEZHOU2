"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscalationPolicyStepTarget = void 0;
/**
 * Defines a single escalation target within a step for an escalation policy creation request. Contains `id`, `type`, and optional `config`.
 */
class EscalationPolicyStepTarget {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EscalationPolicyStepTarget.attributeTypeMap;
    }
}
exports.EscalationPolicyStepTarget = EscalationPolicyStepTarget;
/**
 * @ignore
 */
EscalationPolicyStepTarget.attributeTypeMap = {
    config: {
        baseName: "config",
        type: "EscalationPolicyStepTargetConfig",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "EscalationPolicyStepTargetType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EscalationPolicyStepTarget.js.map
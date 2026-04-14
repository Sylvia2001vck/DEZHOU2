"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscalationPolicyStepTargetConfig = void 0;
/**
 * Configuration for an escalation target, such as schedule position.
 */
class EscalationPolicyStepTargetConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EscalationPolicyStepTargetConfig.attributeTypeMap;
    }
}
exports.EscalationPolicyStepTargetConfig = EscalationPolicyStepTargetConfig;
/**
 * @ignore
 */
EscalationPolicyStepTargetConfig.attributeTypeMap = {
    schedule: {
        baseName: "schedule",
        type: "EscalationPolicyStepTargetConfigSchedule",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EscalationPolicyStepTargetConfig.js.map
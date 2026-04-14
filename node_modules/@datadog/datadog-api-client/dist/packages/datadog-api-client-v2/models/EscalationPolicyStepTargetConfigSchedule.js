"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscalationPolicyStepTargetConfigSchedule = void 0;
/**
 * Schedule-specific configuration for an escalation target.
 */
class EscalationPolicyStepTargetConfigSchedule {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EscalationPolicyStepTargetConfigSchedule.attributeTypeMap;
    }
}
exports.EscalationPolicyStepTargetConfigSchedule = EscalationPolicyStepTargetConfigSchedule;
/**
 * @ignore
 */
EscalationPolicyStepTargetConfigSchedule.attributeTypeMap = {
    position: {
        baseName: "position",
        type: "ScheduleTargetPosition",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EscalationPolicyStepTargetConfigSchedule.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscalationTargets = void 0;
/**
 * A list of escalation targets for a step
 */
class EscalationTargets {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EscalationTargets.attributeTypeMap;
    }
}
exports.EscalationTargets = EscalationTargets;
/**
 * @ignore
 */
EscalationTargets.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<EscalationTarget>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EscalationTargets.js.map
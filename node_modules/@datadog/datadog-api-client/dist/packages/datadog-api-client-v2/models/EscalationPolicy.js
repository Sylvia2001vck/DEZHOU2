"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscalationPolicy = void 0;
/**
 * Represents a complete escalation policy response, including policy data and optionally included related resources.
 */
class EscalationPolicy {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EscalationPolicy.attributeTypeMap;
    }
}
exports.EscalationPolicy = EscalationPolicy;
/**
 * @ignore
 */
EscalationPolicy.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "EscalationPolicyData",
    },
    included: {
        baseName: "included",
        type: "Array<EscalationPolicyIncluded>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EscalationPolicy.js.map
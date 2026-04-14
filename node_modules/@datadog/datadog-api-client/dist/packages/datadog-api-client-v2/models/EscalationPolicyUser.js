"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscalationPolicyUser = void 0;
/**
 * Represents a user object in the context of an escalation policy, including their `id`, type, and basic attributes.
 */
class EscalationPolicyUser {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EscalationPolicyUser.attributeTypeMap;
    }
}
exports.EscalationPolicyUser = EscalationPolicyUser;
/**
 * @ignore
 */
EscalationPolicyUser.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "EscalationPolicyUserAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "EscalationPolicyUserType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EscalationPolicyUser.js.map
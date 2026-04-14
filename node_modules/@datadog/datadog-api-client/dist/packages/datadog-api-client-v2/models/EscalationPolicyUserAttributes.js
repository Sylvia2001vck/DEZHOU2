"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscalationPolicyUserAttributes = void 0;
/**
 * Provides basic user information for an escalation policy, including a name and email address.
 */
class EscalationPolicyUserAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EscalationPolicyUserAttributes.attributeTypeMap;
    }
}
exports.EscalationPolicyUserAttributes = EscalationPolicyUserAttributes;
/**
 * @ignore
 */
EscalationPolicyUserAttributes.attributeTypeMap = {
    email: {
        baseName: "email",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "UserAttributesStatus",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EscalationPolicyUserAttributes.js.map
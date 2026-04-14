"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationOnCall = void 0;
/**
 * On-Call integration settings
 */
class IntegrationOnCall {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IntegrationOnCall.attributeTypeMap;
    }
}
exports.IntegrationOnCall = IntegrationOnCall;
/**
 * @ignore
 */
IntegrationOnCall.attributeTypeMap = {
    autoAssignOnCall: {
        baseName: "auto_assign_on_call",
        type: "boolean",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    escalationQueries: {
        baseName: "escalation_queries",
        type: "Array<IntegrationOnCallEscalationQueriesItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IntegrationOnCall.js.map
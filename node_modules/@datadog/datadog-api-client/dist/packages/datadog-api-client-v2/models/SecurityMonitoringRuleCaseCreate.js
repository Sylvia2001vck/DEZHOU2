"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringRuleCaseCreate = void 0;
/**
 * Case when signal is generated.
 */
class SecurityMonitoringRuleCaseCreate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringRuleCaseCreate.attributeTypeMap;
    }
}
exports.SecurityMonitoringRuleCaseCreate = SecurityMonitoringRuleCaseCreate;
/**
 * @ignore
 */
SecurityMonitoringRuleCaseCreate.attributeTypeMap = {
    actions: {
        baseName: "actions",
        type: "Array<SecurityMonitoringRuleCaseAction>",
    },
    condition: {
        baseName: "condition",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    notifications: {
        baseName: "notifications",
        type: "Array<string>",
    },
    status: {
        baseName: "status",
        type: "SecurityMonitoringRuleSeverity",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringRuleCaseCreate.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringRuleCaseAction = void 0;
/**
 * Action to perform when a signal is triggered. Only available for Application Security rule type.
 */
class SecurityMonitoringRuleCaseAction {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringRuleCaseAction.attributeTypeMap;
    }
}
exports.SecurityMonitoringRuleCaseAction = SecurityMonitoringRuleCaseAction;
/**
 * @ignore
 */
SecurityMonitoringRuleCaseAction.attributeTypeMap = {
    options: {
        baseName: "options",
        type: "SecurityMonitoringRuleCaseActionOptions",
    },
    type: {
        baseName: "type",
        type: "SecurityMonitoringRuleCaseActionType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringRuleCaseAction.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringRuleThirdPartyOptions = void 0;
/**
 * Options on third party detection method.
 */
class SecurityMonitoringRuleThirdPartyOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringRuleThirdPartyOptions.attributeTypeMap;
    }
}
exports.SecurityMonitoringRuleThirdPartyOptions = SecurityMonitoringRuleThirdPartyOptions;
/**
 * @ignore
 */
SecurityMonitoringRuleThirdPartyOptions.attributeTypeMap = {
    defaultNotifications: {
        baseName: "defaultNotifications",
        type: "Array<string>",
    },
    defaultStatus: {
        baseName: "defaultStatus",
        type: "SecurityMonitoringRuleSeverity",
    },
    rootQueries: {
        baseName: "rootQueries",
        type: "Array<SecurityMonitoringThirdPartyRootQuery>",
    },
    signalTitleTemplate: {
        baseName: "signalTitleTemplate",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringRuleThirdPartyOptions.js.map
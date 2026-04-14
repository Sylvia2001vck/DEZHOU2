"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringListRulesResponse = void 0;
/**
 * List of rules.
 */
class SecurityMonitoringListRulesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringListRulesResponse.attributeTypeMap;
    }
}
exports.SecurityMonitoringListRulesResponse = SecurityMonitoringListRulesResponse;
/**
 * @ignore
 */
SecurityMonitoringListRulesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<SecurityMonitoringRuleResponse>",
    },
    meta: {
        baseName: "meta",
        type: "ResponseMetaAttributes",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringListRulesResponse.js.map
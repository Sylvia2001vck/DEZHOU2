"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentNotificationRule = void 0;
/**
 * Response with a notification rule.
 */
class IncidentNotificationRule {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentNotificationRule.attributeTypeMap;
    }
}
exports.IncidentNotificationRule = IncidentNotificationRule;
/**
 * @ignore
 */
IncidentNotificationRule.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentNotificationRuleResponseData",
        required: true,
    },
    included: {
        baseName: "included",
        type: "Array<IncidentNotificationRuleIncludedItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentNotificationRule.js.map
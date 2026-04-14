"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorNotificationRuleConditionalRecipients = void 0;
/**
 * Use conditional recipients to define different recipients for different situations. Cannot be used with `recipients`.
 */
class MonitorNotificationRuleConditionalRecipients {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorNotificationRuleConditionalRecipients.attributeTypeMap;
    }
}
exports.MonitorNotificationRuleConditionalRecipients = MonitorNotificationRuleConditionalRecipients;
/**
 * @ignore
 */
MonitorNotificationRuleConditionalRecipients.attributeTypeMap = {
    conditions: {
        baseName: "conditions",
        type: "Array<MonitorNotificationRuleCondition>",
        required: true,
    },
    fallbackRecipients: {
        baseName: "fallback_recipients",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorNotificationRuleConditionalRecipients.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorNotificationRuleAttributes = void 0;
/**
 * Attributes of the monitor notification rule.
 */
class MonitorNotificationRuleAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorNotificationRuleAttributes.attributeTypeMap;
    }
}
exports.MonitorNotificationRuleAttributes = MonitorNotificationRuleAttributes;
/**
 * @ignore
 */
MonitorNotificationRuleAttributes.attributeTypeMap = {
    conditionalRecipients: {
        baseName: "conditional_recipients",
        type: "MonitorNotificationRuleConditionalRecipients",
    },
    filter: {
        baseName: "filter",
        type: "MonitorNotificationRuleFilter",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    recipients: {
        baseName: "recipients",
        type: "Array<string>",
    },
};
//# sourceMappingURL=MonitorNotificationRuleAttributes.js.map
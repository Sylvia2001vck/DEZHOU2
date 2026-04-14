"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorNotificationRuleResponseAttributes = void 0;
/**
 * Attributes of the monitor notification rule.
 */
class MonitorNotificationRuleResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorNotificationRuleResponseAttributes.attributeTypeMap;
    }
}
exports.MonitorNotificationRuleResponseAttributes = MonitorNotificationRuleResponseAttributes;
/**
 * @ignore
 */
MonitorNotificationRuleResponseAttributes.attributeTypeMap = {
    conditionalRecipients: {
        baseName: "conditional_recipients",
        type: "MonitorNotificationRuleConditionalRecipients",
    },
    created: {
        baseName: "created",
        type: "Date",
        format: "date-time",
    },
    filter: {
        baseName: "filter",
        type: "MonitorNotificationRuleFilter",
    },
    modified: {
        baseName: "modified",
        type: "Date",
        format: "date-time",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    recipients: {
        baseName: "recipients",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorNotificationRuleResponseAttributes.js.map
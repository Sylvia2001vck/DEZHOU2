"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentNotificationRuleCreateAttributes = void 0;
/**
 * The attributes for creating a notification rule.
 */
class IncidentNotificationRuleCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentNotificationRuleCreateAttributes.attributeTypeMap;
    }
}
exports.IncidentNotificationRuleCreateAttributes = IncidentNotificationRuleCreateAttributes;
/**
 * @ignore
 */
IncidentNotificationRuleCreateAttributes.attributeTypeMap = {
    conditions: {
        baseName: "conditions",
        type: "Array<IncidentNotificationRuleConditionsItems>",
        required: true,
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    handles: {
        baseName: "handles",
        type: "Array<string>",
        required: true,
    },
    renotifyOn: {
        baseName: "renotify_on",
        type: "Array<string>",
    },
    trigger: {
        baseName: "trigger",
        type: "string",
        required: true,
    },
    visibility: {
        baseName: "visibility",
        type: "IncidentNotificationRuleCreateAttributesVisibility",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentNotificationRuleCreateAttributes.js.map
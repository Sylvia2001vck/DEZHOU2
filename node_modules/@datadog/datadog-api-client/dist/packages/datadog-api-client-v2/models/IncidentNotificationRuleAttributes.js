"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentNotificationRuleAttributes = void 0;
/**
 * The notification rule's attributes.
 */
class IncidentNotificationRuleAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentNotificationRuleAttributes.attributeTypeMap;
    }
}
exports.IncidentNotificationRuleAttributes = IncidentNotificationRuleAttributes;
/**
 * @ignore
 */
IncidentNotificationRuleAttributes.attributeTypeMap = {
    conditions: {
        baseName: "conditions",
        type: "Array<IncidentNotificationRuleConditionsItems>",
        required: true,
    },
    created: {
        baseName: "created",
        type: "Date",
        required: true,
        format: "date-time",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
        required: true,
    },
    handles: {
        baseName: "handles",
        type: "Array<string>",
        required: true,
    },
    modified: {
        baseName: "modified",
        type: "Date",
        required: true,
        format: "date-time",
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
        type: "IncidentNotificationRuleAttributesVisibility",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentNotificationRuleAttributes.js.map
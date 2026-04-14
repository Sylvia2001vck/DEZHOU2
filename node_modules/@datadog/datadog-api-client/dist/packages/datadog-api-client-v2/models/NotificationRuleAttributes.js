"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationRuleAttributes = void 0;
/**
 * Attributes of the notification rule.
 */
class NotificationRuleAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotificationRuleAttributes.attributeTypeMap;
    }
}
exports.NotificationRuleAttributes = NotificationRuleAttributes;
/**
 * @ignore
 */
NotificationRuleAttributes.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "number",
        required: true,
    },
    createdBy: {
        baseName: "created_by",
        type: "RuleUser",
        required: true,
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
        required: true,
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "number",
        required: true,
    },
    modifiedBy: {
        baseName: "modified_by",
        type: "RuleUser",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    selectors: {
        baseName: "selectors",
        type: "Selectors",
        required: true,
    },
    targets: {
        baseName: "targets",
        type: "Array<string>",
        required: true,
    },
    timeAggregation: {
        baseName: "time_aggregation",
        type: "number",
    },
    version: {
        baseName: "version",
        type: "number",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotificationRuleAttributes.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchNotificationRuleParametersDataAttributes = void 0;
/**
 * Attributes of the notification rule patch request. It is required to update the version of the rule when patching it.
 */
class PatchNotificationRuleParametersDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PatchNotificationRuleParametersDataAttributes.attributeTypeMap;
    }
}
exports.PatchNotificationRuleParametersDataAttributes = PatchNotificationRuleParametersDataAttributes;
/**
 * @ignore
 */
PatchNotificationRuleParametersDataAttributes.attributeTypeMap = {
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    selectors: {
        baseName: "selectors",
        type: "Selectors",
    },
    targets: {
        baseName: "targets",
        type: "Array<string>",
    },
    timeAggregation: {
        baseName: "time_aggregation",
        type: "number",
    },
    version: {
        baseName: "version",
        type: "number",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PatchNotificationRuleParametersDataAttributes.js.map
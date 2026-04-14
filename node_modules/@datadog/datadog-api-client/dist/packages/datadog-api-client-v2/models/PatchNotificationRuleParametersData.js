"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchNotificationRuleParametersData = void 0;
/**
 * Data of the notification rule patch request: the rule ID, the rule type, and the rule attributes. All fields are required.
 */
class PatchNotificationRuleParametersData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PatchNotificationRuleParametersData.attributeTypeMap;
    }
}
exports.PatchNotificationRuleParametersData = PatchNotificationRuleParametersData;
/**
 * @ignore
 */
PatchNotificationRuleParametersData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "PatchNotificationRuleParametersDataAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "NotificationRulesType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PatchNotificationRuleParametersData.js.map
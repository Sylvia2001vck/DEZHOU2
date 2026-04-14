"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnCallNotificationRule = void 0;
/**
 * A top-level wrapper for a notification rule
 */
class OnCallNotificationRule {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OnCallNotificationRule.attributeTypeMap;
    }
}
exports.OnCallNotificationRule = OnCallNotificationRule;
/**
 * @ignore
 */
OnCallNotificationRule.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "OnCallNotificationRuleData",
        required: true,
    },
    included: {
        baseName: "included",
        type: "Array<OnCallNotificationRulesIncluded>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OnCallNotificationRule.js.map
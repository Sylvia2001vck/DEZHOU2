"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnCallNotificationRuleData = void 0;
/**
 * Data for an on-call notification rule
 */
class OnCallNotificationRuleData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OnCallNotificationRuleData.attributeTypeMap;
    }
}
exports.OnCallNotificationRuleData = OnCallNotificationRuleData;
/**
 * @ignore
 */
OnCallNotificationRuleData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "OnCallNotificationRuleAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "OnCallNotificationRuleRelationships",
    },
    type: {
        baseName: "type",
        type: "OnCallNotificationRuleType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OnCallNotificationRuleData.js.map
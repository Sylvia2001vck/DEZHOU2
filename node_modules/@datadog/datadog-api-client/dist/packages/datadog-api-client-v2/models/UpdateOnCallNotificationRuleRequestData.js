"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOnCallNotificationRuleRequestData = void 0;
/**
 * Data for updating an on-call notification rule
 */
class UpdateOnCallNotificationRuleRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateOnCallNotificationRuleRequestData.attributeTypeMap;
    }
}
exports.UpdateOnCallNotificationRuleRequestData = UpdateOnCallNotificationRuleRequestData;
/**
 * @ignore
 */
UpdateOnCallNotificationRuleRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "UpdateOnCallNotificationRuleRequestAttributes",
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
//# sourceMappingURL=UpdateOnCallNotificationRuleRequestData.js.map
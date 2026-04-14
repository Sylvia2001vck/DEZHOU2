"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnCallNotificationRuleChannelRelationship = void 0;
/**
 * Relationship object for creating a notification rule
 */
class OnCallNotificationRuleChannelRelationship {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OnCallNotificationRuleChannelRelationship.attributeTypeMap;
    }
}
exports.OnCallNotificationRuleChannelRelationship = OnCallNotificationRuleChannelRelationship;
/**
 * @ignore
 */
OnCallNotificationRuleChannelRelationship.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "OnCallNotificationRuleChannelRelationshipData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OnCallNotificationRuleChannelRelationship.js.map
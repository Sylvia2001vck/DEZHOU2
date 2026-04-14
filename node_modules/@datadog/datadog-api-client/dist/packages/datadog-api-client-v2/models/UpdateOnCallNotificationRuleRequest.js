"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOnCallNotificationRuleRequest = void 0;
/**
 * A top-level wrapper for updating a notification rule for a user
 */
class UpdateOnCallNotificationRuleRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateOnCallNotificationRuleRequest.attributeTypeMap;
    }
}
exports.UpdateOnCallNotificationRuleRequest = UpdateOnCallNotificationRuleRequest;
/**
 * @ignore
 */
UpdateOnCallNotificationRuleRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "UpdateOnCallNotificationRuleRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateOnCallNotificationRuleRequest.js.map
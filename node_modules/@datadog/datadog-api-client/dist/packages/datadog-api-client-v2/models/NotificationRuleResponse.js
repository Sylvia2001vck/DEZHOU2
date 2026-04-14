"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationRuleResponse = void 0;
/**
 * Response object which includes a notification rule.
 */
class NotificationRuleResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotificationRuleResponse.attributeTypeMap;
    }
}
exports.NotificationRuleResponse = NotificationRuleResponse;
/**
 * @ignore
 */
NotificationRuleResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "NotificationRule",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotificationRuleResponse.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationRulesList = void 0;
class NotificationRulesList {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotificationRulesList.attributeTypeMap;
    }
}
exports.NotificationRulesList = NotificationRulesList;
/**
 * @ignore
 */
NotificationRulesList.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<NotificationRule>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotificationRulesList.js.map
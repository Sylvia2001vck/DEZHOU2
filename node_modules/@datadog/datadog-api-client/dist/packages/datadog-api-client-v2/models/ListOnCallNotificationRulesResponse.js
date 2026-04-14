"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOnCallNotificationRulesResponse = void 0;
/**
 * Response type for listing notification rules for a user
 */
class ListOnCallNotificationRulesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListOnCallNotificationRulesResponse.attributeTypeMap;
    }
}
exports.ListOnCallNotificationRulesResponse = ListOnCallNotificationRulesResponse;
/**
 * @ignore
 */
ListOnCallNotificationRulesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<OnCallNotificationRuleData>",
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
//# sourceMappingURL=ListOnCallNotificationRulesResponse.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamNotificationRule = void 0;
/**
 * Team notification rule
 */
class TeamNotificationRule {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamNotificationRule.attributeTypeMap;
    }
}
exports.TeamNotificationRule = TeamNotificationRule;
/**
 * @ignore
 */
TeamNotificationRule.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "TeamNotificationRuleAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "TeamNotificationRuleType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamNotificationRule.js.map
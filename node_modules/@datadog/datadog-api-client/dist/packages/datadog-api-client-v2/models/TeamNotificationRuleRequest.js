"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamNotificationRuleRequest = void 0;
/**
 * Request to create or update a team notification rule
 */
class TeamNotificationRuleRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamNotificationRuleRequest.attributeTypeMap;
    }
}
exports.TeamNotificationRuleRequest = TeamNotificationRuleRequest;
/**
 * @ignore
 */
TeamNotificationRuleRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "TeamNotificationRule",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamNotificationRuleRequest.js.map
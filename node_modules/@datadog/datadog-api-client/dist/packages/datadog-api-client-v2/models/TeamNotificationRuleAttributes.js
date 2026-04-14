"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamNotificationRuleAttributes = void 0;
/**
 * Team notification rule attributes
 */
class TeamNotificationRuleAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamNotificationRuleAttributes.attributeTypeMap;
    }
}
exports.TeamNotificationRuleAttributes = TeamNotificationRuleAttributes;
/**
 * @ignore
 */
TeamNotificationRuleAttributes.attributeTypeMap = {
    email: {
        baseName: "email",
        type: "TeamNotificationRuleAttributesEmail",
    },
    msTeams: {
        baseName: "ms_teams",
        type: "TeamNotificationRuleAttributesMsTeams",
    },
    pagerduty: {
        baseName: "pagerduty",
        type: "TeamNotificationRuleAttributesPagerduty",
    },
    slack: {
        baseName: "slack",
        type: "TeamNotificationRuleAttributesSlack",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamNotificationRuleAttributes.js.map
"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamNotificationRuleAttributesSlack = void 0;
/**
 * Slack notification settings for the team
 */
class TeamNotificationRuleAttributesSlack {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamNotificationRuleAttributesSlack.attributeTypeMap;
    }
}
exports.TeamNotificationRuleAttributesSlack = TeamNotificationRuleAttributesSlack;
/**
 * @ignore
 */
TeamNotificationRuleAttributesSlack.attributeTypeMap = {
    channel: {
        baseName: "channel",
        type: "string",
    },
    workspace: {
        baseName: "workspace",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamNotificationRuleAttributesSlack.js.map
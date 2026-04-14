"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamNotificationRuleAttributesMsTeams = void 0;
/**
 * MS Teams notification settings for the team
 */
class TeamNotificationRuleAttributesMsTeams {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamNotificationRuleAttributesMsTeams.attributeTypeMap;
    }
}
exports.TeamNotificationRuleAttributesMsTeams = TeamNotificationRuleAttributesMsTeams;
/**
 * @ignore
 */
TeamNotificationRuleAttributesMsTeams.attributeTypeMap = {
    connectorName: {
        baseName: "connector_name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamNotificationRuleAttributesMsTeams.js.map
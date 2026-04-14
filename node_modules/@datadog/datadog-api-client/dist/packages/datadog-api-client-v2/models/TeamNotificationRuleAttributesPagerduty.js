"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamNotificationRuleAttributesPagerduty = void 0;
/**
 * PagerDuty notification settings for the team
 */
class TeamNotificationRuleAttributesPagerduty {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamNotificationRuleAttributesPagerduty.attributeTypeMap;
    }
}
exports.TeamNotificationRuleAttributesPagerduty = TeamNotificationRuleAttributesPagerduty;
/**
 * @ignore
 */
TeamNotificationRuleAttributesPagerduty.attributeTypeMap = {
    serviceName: {
        baseName: "service_name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamNotificationRuleAttributesPagerduty.js.map
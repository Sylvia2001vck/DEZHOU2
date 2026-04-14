"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamNotificationRuleAttributesEmail = void 0;
/**
 * Email notification settings for the team
 */
class TeamNotificationRuleAttributesEmail {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamNotificationRuleAttributesEmail.attributeTypeMap;
    }
}
exports.TeamNotificationRuleAttributesEmail = TeamNotificationRuleAttributesEmail;
/**
 * @ignore
 */
TeamNotificationRuleAttributesEmail.attributeTypeMap = {
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamNotificationRuleAttributesEmail.js.map
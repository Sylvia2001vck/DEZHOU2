"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorNotificationRuleCondition = void 0;
/**
 * A conditional recipient rule composed of a `scope` (the matching condition) and
 * `recipients` (who to notify when it matches).
 */
class MonitorNotificationRuleCondition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorNotificationRuleCondition.attributeTypeMap;
    }
}
exports.MonitorNotificationRuleCondition = MonitorNotificationRuleCondition;
/**
 * @ignore
 */
MonitorNotificationRuleCondition.attributeTypeMap = {
    recipients: {
        baseName: "recipients",
        type: "Array<string>",
        required: true,
    },
    scope: {
        baseName: "scope",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorNotificationRuleCondition.js.map
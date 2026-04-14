"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentNotificationRuleConditionsItems = void 0;
/**
 * A condition that must be met to trigger the notification rule.
 */
class IncidentNotificationRuleConditionsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentNotificationRuleConditionsItems.attributeTypeMap;
    }
}
exports.IncidentNotificationRuleConditionsItems = IncidentNotificationRuleConditionsItems;
/**
 * @ignore
 */
IncidentNotificationRuleConditionsItems.attributeTypeMap = {
    field: {
        baseName: "field",
        type: "string",
        required: true,
    },
    values: {
        baseName: "values",
        type: "Array<string>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentNotificationRuleConditionsItems.js.map
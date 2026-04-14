"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorNotificationRuleFilterTags = void 0;
/**
 * Filters monitor notifications by a list of tag key:value pairs.
 */
class MonitorNotificationRuleFilterTags {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorNotificationRuleFilterTags.attributeTypeMap;
    }
}
exports.MonitorNotificationRuleFilterTags = MonitorNotificationRuleFilterTags;
/**
 * @ignore
 */
MonitorNotificationRuleFilterTags.attributeTypeMap = {
    tags: {
        baseName: "tags",
        type: "Array<string>",
        required: true,
    },
};
//# sourceMappingURL=MonitorNotificationRuleFilterTags.js.map
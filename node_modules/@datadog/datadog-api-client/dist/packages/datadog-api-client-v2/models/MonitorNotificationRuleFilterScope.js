"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorNotificationRuleFilterScope = void 0;
/**
 * Filters monitor notifications using a scope expression over key:value pairs with boolean logic (AND, OR, NOT).
 */
class MonitorNotificationRuleFilterScope {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorNotificationRuleFilterScope.attributeTypeMap;
    }
}
exports.MonitorNotificationRuleFilterScope = MonitorNotificationRuleFilterScope;
/**
 * @ignore
 */
MonitorNotificationRuleFilterScope.attributeTypeMap = {
    scope: {
        baseName: "scope",
        type: "string",
        required: true,
    },
};
//# sourceMappingURL=MonitorNotificationRuleFilterScope.js.map
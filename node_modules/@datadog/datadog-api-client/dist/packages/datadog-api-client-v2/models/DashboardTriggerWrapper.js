"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardTriggerWrapper = void 0;
/**
 * Schema for a Dashboard-based trigger.
 */
class DashboardTriggerWrapper {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DashboardTriggerWrapper.attributeTypeMap;
    }
}
exports.DashboardTriggerWrapper = DashboardTriggerWrapper;
/**
 * @ignore
 */
DashboardTriggerWrapper.attributeTypeMap = {
    dashboardTrigger: {
        baseName: "dashboardTrigger",
        type: "any",
        required: true,
    },
    startStepNames: {
        baseName: "startStepNames",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DashboardTriggerWrapper.js.map
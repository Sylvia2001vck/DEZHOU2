"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalIncidentSettingsAttributesResponse = void 0;
/**
 * Global incident settings attributes
 */
class GlobalIncidentSettingsAttributesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GlobalIncidentSettingsAttributesResponse.attributeTypeMap;
    }
}
exports.GlobalIncidentSettingsAttributesResponse = GlobalIncidentSettingsAttributesResponse;
/**
 * @ignore
 */
GlobalIncidentSettingsAttributesResponse.attributeTypeMap = {
    analyticsDashboardId: {
        baseName: "analytics_dashboard_id",
        type: "string",
        required: true,
    },
    created: {
        baseName: "created",
        type: "Date",
        required: true,
        format: "date-time",
    },
    modified: {
        baseName: "modified",
        type: "Date",
        required: true,
        format: "date-time",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GlobalIncidentSettingsAttributesResponse.js.map
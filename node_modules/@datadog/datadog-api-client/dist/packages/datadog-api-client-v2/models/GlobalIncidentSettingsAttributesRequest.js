"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalIncidentSettingsAttributesRequest = void 0;
/**
 * Global incident settings attributes
 */
class GlobalIncidentSettingsAttributesRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GlobalIncidentSettingsAttributesRequest.attributeTypeMap;
    }
}
exports.GlobalIncidentSettingsAttributesRequest = GlobalIncidentSettingsAttributesRequest;
/**
 * @ignore
 */
GlobalIncidentSettingsAttributesRequest.attributeTypeMap = {
    analyticsDashboardId: {
        baseName: "analytics_dashboard_id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GlobalIncidentSettingsAttributesRequest.js.map
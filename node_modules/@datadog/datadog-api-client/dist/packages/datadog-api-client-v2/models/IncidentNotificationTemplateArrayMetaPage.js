"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentNotificationTemplateArrayMetaPage = void 0;
/**
 * Pagination metadata.
 */
class IncidentNotificationTemplateArrayMetaPage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentNotificationTemplateArrayMetaPage.attributeTypeMap;
    }
}
exports.IncidentNotificationTemplateArrayMetaPage = IncidentNotificationTemplateArrayMetaPage;
/**
 * @ignore
 */
IncidentNotificationTemplateArrayMetaPage.attributeTypeMap = {
    totalCount: {
        baseName: "total_count",
        type: "number",
        format: "int64",
    },
    totalFilteredCount: {
        baseName: "total_filtered_count",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentNotificationTemplateArrayMetaPage.js.map
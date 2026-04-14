"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentNotificationRuleArrayMetaPage = void 0;
/**
 * Pagination metadata.
 */
class IncidentNotificationRuleArrayMetaPage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentNotificationRuleArrayMetaPage.attributeTypeMap;
    }
}
exports.IncidentNotificationRuleArrayMetaPage = IncidentNotificationRuleArrayMetaPage;
/**
 * @ignore
 */
IncidentNotificationRuleArrayMetaPage.attributeTypeMap = {
    nextOffset: {
        baseName: "next_offset",
        type: "number",
        format: "int64",
    },
    offset: {
        baseName: "offset",
        type: "number",
        format: "int64",
    },
    size: {
        baseName: "size",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentNotificationRuleArrayMetaPage.js.map
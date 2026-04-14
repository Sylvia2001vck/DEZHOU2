"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DowntimeMetaPage = void 0;
/**
 * Object containing the total filtered count.
 */
class DowntimeMetaPage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DowntimeMetaPage.attributeTypeMap;
    }
}
exports.DowntimeMetaPage = DowntimeMetaPage;
/**
 * @ignore
 */
DowntimeMetaPage.attributeTypeMap = {
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
//# sourceMappingURL=DowntimeMetaPage.js.map
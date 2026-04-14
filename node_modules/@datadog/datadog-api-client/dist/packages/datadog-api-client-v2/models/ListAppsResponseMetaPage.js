"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAppsResponseMetaPage = void 0;
/**
 * Information on the total number of apps, to be used for pagination.
 */
class ListAppsResponseMetaPage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListAppsResponseMetaPage.attributeTypeMap;
    }
}
exports.ListAppsResponseMetaPage = ListAppsResponseMetaPage;
/**
 * @ignore
 */
ListAppsResponseMetaPage.attributeTypeMap = {
    totalCount: {
        baseName: "totalCount",
        type: "number",
        format: "int64",
    },
    totalFilteredCount: {
        baseName: "totalFilteredCount",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListAppsResponseMetaPage.js.map
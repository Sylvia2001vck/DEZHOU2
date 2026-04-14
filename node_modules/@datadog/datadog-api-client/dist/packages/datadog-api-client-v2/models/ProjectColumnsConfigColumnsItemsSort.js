"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectColumnsConfigColumnsItemsSort = void 0;
class ProjectColumnsConfigColumnsItemsSort {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProjectColumnsConfigColumnsItemsSort.attributeTypeMap;
    }
}
exports.ProjectColumnsConfigColumnsItemsSort = ProjectColumnsConfigColumnsItemsSort;
/**
 * @ignore
 */
ProjectColumnsConfigColumnsItemsSort.attributeTypeMap = {
    ascending: {
        baseName: "ascending",
        type: "boolean",
    },
    priority: {
        baseName: "priority",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProjectColumnsConfigColumnsItemsSort.js.map
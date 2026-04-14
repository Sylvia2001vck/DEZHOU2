"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricDashboardAttributes = void 0;
/**
 * Attributes related to the dashboard, including title, popularity, and url.
 */
class MetricDashboardAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricDashboardAttributes.attributeTypeMap;
    }
}
exports.MetricDashboardAttributes = MetricDashboardAttributes;
/**
 * @ignore
 */
MetricDashboardAttributes.attributeTypeMap = {
    popularity: {
        baseName: "popularity",
        type: "number",
        format: "double",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    url: {
        baseName: "url",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricDashboardAttributes.js.map
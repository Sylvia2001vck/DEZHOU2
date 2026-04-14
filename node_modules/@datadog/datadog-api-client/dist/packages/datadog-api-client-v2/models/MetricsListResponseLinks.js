"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsListResponseLinks = void 0;
/**
 * Pagination links. Only present if pagination query parameters were provided.
 */
class MetricsListResponseLinks {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricsListResponseLinks.attributeTypeMap;
    }
}
exports.MetricsListResponseLinks = MetricsListResponseLinks;
/**
 * @ignore
 */
MetricsListResponseLinks.attributeTypeMap = {
    first: {
        baseName: "first",
        type: "string",
    },
    last: {
        baseName: "last",
        type: "string",
    },
    next: {
        baseName: "next",
        type: "string",
    },
    prev: {
        baseName: "prev",
        type: "string",
    },
    self: {
        baseName: "self",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricsListResponseLinks.js.map
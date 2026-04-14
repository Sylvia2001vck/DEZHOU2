"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamsResponseMetaPagination = void 0;
/**
 * Teams response metadata.
 */
class TeamsResponseMetaPagination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamsResponseMetaPagination.attributeTypeMap;
    }
}
exports.TeamsResponseMetaPagination = TeamsResponseMetaPagination;
/**
 * @ignore
 */
TeamsResponseMetaPagination.attributeTypeMap = {
    firstOffset: {
        baseName: "first_offset",
        type: "number",
        format: "int64",
    },
    lastOffset: {
        baseName: "last_offset",
        type: "number",
        format: "int64",
    },
    limit: {
        baseName: "limit",
        type: "number",
        format: "int64",
    },
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
    prevOffset: {
        baseName: "prev_offset",
        type: "number",
        format: "int64",
    },
    total: {
        baseName: "total",
        type: "number",
        format: "int64",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamsResponseMetaPagination.js.map
"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerpacksResponseMetaPagination = void 0;
/**
 * Powerpack response pagination metadata.
 */
class PowerpacksResponseMetaPagination {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PowerpacksResponseMetaPagination.attributeTypeMap;
    }
}
exports.PowerpacksResponseMetaPagination = PowerpacksResponseMetaPagination;
/**
 * @ignore
 */
PowerpacksResponseMetaPagination.attributeTypeMap = {
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
//# sourceMappingURL=PowerpacksResponseMetaPagination.js.map
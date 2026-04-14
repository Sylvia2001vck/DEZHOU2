"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DependencyLocation = void 0;
/**
 * Static library vulnerability location.
 */
class DependencyLocation {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DependencyLocation.attributeTypeMap;
    }
}
exports.DependencyLocation = DependencyLocation;
/**
 * @ignore
 */
DependencyLocation.attributeTypeMap = {
    columnEnd: {
        baseName: "column_end",
        type: "number",
        required: true,
        format: "int64",
    },
    columnStart: {
        baseName: "column_start",
        type: "number",
        required: true,
        format: "int64",
    },
    fileName: {
        baseName: "file_name",
        type: "string",
        required: true,
    },
    lineEnd: {
        baseName: "line_end",
        type: "number",
        required: true,
        format: "int64",
    },
    lineStart: {
        baseName: "line_start",
        type: "number",
        required: true,
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DependencyLocation.js.map
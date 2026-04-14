"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSONAPIErrorItemSource = void 0;
/**
 * References to the source of the error.
 */
class JSONAPIErrorItemSource {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JSONAPIErrorItemSource.attributeTypeMap;
    }
}
exports.JSONAPIErrorItemSource = JSONAPIErrorItemSource;
/**
 * @ignore
 */
JSONAPIErrorItemSource.attributeTypeMap = {
    header: {
        baseName: "header",
        type: "string",
    },
    parameter: {
        baseName: "parameter",
        type: "string",
    },
    pointer: {
        baseName: "pointer",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=JSONAPIErrorItemSource.js.map
"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metadata = void 0;
/**
 * The metadata related to this request.
 */
class Metadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Metadata.attributeTypeMap;
    }
}
exports.Metadata = Metadata;
/**
 * @ignore
 */
Metadata.attributeTypeMap = {
    count: {
        baseName: "count",
        type: "number",
        required: true,
        format: "int64",
    },
    token: {
        baseName: "token",
        type: "string",
        required: true,
    },
    total: {
        baseName: "total",
        type: "number",
        required: true,
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Metadata.js.map
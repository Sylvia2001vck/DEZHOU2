"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPCIAppError = void 0;
/**
 * List of errors.
 */
class HTTPCIAppError {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HTTPCIAppError.attributeTypeMap;
    }
}
exports.HTTPCIAppError = HTTPCIAppError;
/**
 * @ignore
 */
HTTPCIAppError.attributeTypeMap = {
    detail: {
        baseName: "detail",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "string",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HTTPCIAppError.js.map
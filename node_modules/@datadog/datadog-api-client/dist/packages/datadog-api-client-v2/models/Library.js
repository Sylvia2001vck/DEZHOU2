"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Library = void 0;
/**
 * Vulnerability library.
 */
class Library {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Library.attributeTypeMap;
    }
}
exports.Library = Library;
/**
 * @ignore
 */
Library.attributeTypeMap = {
    additionalNames: {
        baseName: "additional_names",
        type: "Array<string>",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    version: {
        baseName: "version",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Library.js.map
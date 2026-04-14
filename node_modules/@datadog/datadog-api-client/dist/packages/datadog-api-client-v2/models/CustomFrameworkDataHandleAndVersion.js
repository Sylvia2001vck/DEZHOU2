"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFrameworkDataHandleAndVersion = void 0;
/**
 * Framework Handle and Version.
 */
class CustomFrameworkDataHandleAndVersion {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomFrameworkDataHandleAndVersion.attributeTypeMap;
    }
}
exports.CustomFrameworkDataHandleAndVersion = CustomFrameworkDataHandleAndVersion;
/**
 * @ignore
 */
CustomFrameworkDataHandleAndVersion.attributeTypeMap = {
    handle: {
        baseName: "handle",
        type: "string",
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
//# sourceMappingURL=CustomFrameworkDataHandleAndVersion.js.map
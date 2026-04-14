"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerMetaVersionOnly = void 0;
/**
 * Meta payload containing information about the API.
 */
class SensitiveDataScannerMetaVersionOnly {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerMetaVersionOnly.attributeTypeMap;
    }
}
exports.SensitiveDataScannerMetaVersionOnly = SensitiveDataScannerMetaVersionOnly;
/**
 * @ignore
 */
SensitiveDataScannerMetaVersionOnly.attributeTypeMap = {
    version: {
        baseName: "version",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerMetaVersionOnly.js.map
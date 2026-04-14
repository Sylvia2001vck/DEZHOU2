"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerStandardPatternAttributes = void 0;
/**
 * Attributes of the Sensitive Data Scanner standard pattern.
 */
class SensitiveDataScannerStandardPatternAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerStandardPatternAttributes.attributeTypeMap;
    }
}
exports.SensitiveDataScannerStandardPatternAttributes = SensitiveDataScannerStandardPatternAttributes;
/**
 * @ignore
 */
SensitiveDataScannerStandardPatternAttributes.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
    },
    includedKeywords: {
        baseName: "included_keywords",
        type: "Array<string>",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    pattern: {
        baseName: "pattern",
        type: "string",
    },
    priority: {
        baseName: "priority",
        type: "number",
        format: "int64",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerStandardPatternAttributes.js.map
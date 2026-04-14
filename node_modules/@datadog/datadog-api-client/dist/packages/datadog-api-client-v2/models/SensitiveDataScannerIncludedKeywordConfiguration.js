"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerIncludedKeywordConfiguration = void 0;
/**
 * Object defining a set of keywords and a number of characters that help reduce noise.
 * You can provide a list of keywords you would like to check within a defined proximity of the matching pattern.
 * If any of the keywords are found within the proximity check, the match is kept.
 * If none are found, the match is discarded.
 */
class SensitiveDataScannerIncludedKeywordConfiguration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerIncludedKeywordConfiguration.attributeTypeMap;
    }
}
exports.SensitiveDataScannerIncludedKeywordConfiguration = SensitiveDataScannerIncludedKeywordConfiguration;
/**
 * @ignore
 */
SensitiveDataScannerIncludedKeywordConfiguration.attributeTypeMap = {
    characterCount: {
        baseName: "character_count",
        type: "number",
        required: true,
        format: "int64",
    },
    keywords: {
        baseName: "keywords",
        type: "Array<string>",
        required: true,
    },
    useRecommendedKeywords: {
        baseName: "use_recommended_keywords",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerIncludedKeywordConfiguration.js.map
"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerSuppressions = void 0;
/**
 * Object describing the suppressions for a rule. There are three types of suppressions, `starts_with`, `ends_with`, and `exact_match`.
 * Suppressed matches are not obfuscated, counted in metrics, or displayed in the Findings page.
 */
class SensitiveDataScannerSuppressions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerSuppressions.attributeTypeMap;
    }
}
exports.SensitiveDataScannerSuppressions = SensitiveDataScannerSuppressions;
/**
 * @ignore
 */
SensitiveDataScannerSuppressions.attributeTypeMap = {
    endsWith: {
        baseName: "ends_with",
        type: "Array<string>",
    },
    exactMatch: {
        baseName: "exact_match",
        type: "Array<string>",
    },
    startsWith: {
        baseName: "starts_with",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerSuppressions.js.map
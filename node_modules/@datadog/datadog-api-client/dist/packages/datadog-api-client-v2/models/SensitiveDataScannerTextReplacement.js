"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerTextReplacement = void 0;
/**
 * Object describing how the scanned event will be replaced.
 */
class SensitiveDataScannerTextReplacement {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerTextReplacement.attributeTypeMap;
    }
}
exports.SensitiveDataScannerTextReplacement = SensitiveDataScannerTextReplacement;
/**
 * @ignore
 */
SensitiveDataScannerTextReplacement.attributeTypeMap = {
    numberOfChars: {
        baseName: "number_of_chars",
        type: "number",
        format: "int64",
    },
    replacementString: {
        baseName: "replacement_string",
        type: "string",
    },
    shouldSaveMatch: {
        baseName: "should_save_match",
        type: "boolean",
    },
    type: {
        baseName: "type",
        type: "SensitiveDataScannerTextReplacementType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerTextReplacement.js.map
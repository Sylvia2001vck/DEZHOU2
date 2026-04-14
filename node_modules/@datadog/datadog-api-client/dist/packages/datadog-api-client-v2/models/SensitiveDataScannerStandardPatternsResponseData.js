"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerStandardPatternsResponseData = void 0;
/**
 * List Standard patterns response data.
 */
class SensitiveDataScannerStandardPatternsResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerStandardPatternsResponseData.attributeTypeMap;
    }
}
exports.SensitiveDataScannerStandardPatternsResponseData = SensitiveDataScannerStandardPatternsResponseData;
/**
 * @ignore
 */
SensitiveDataScannerStandardPatternsResponseData.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<SensitiveDataScannerStandardPatternsResponseItem>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerStandardPatternsResponseData.js.map
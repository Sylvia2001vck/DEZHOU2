"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerStandardPatternData = void 0;
/**
 * A standard pattern.
 */
class SensitiveDataScannerStandardPatternData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerStandardPatternData.attributeTypeMap;
    }
}
exports.SensitiveDataScannerStandardPatternData = SensitiveDataScannerStandardPatternData;
/**
 * @ignore
 */
SensitiveDataScannerStandardPatternData.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SensitiveDataScannerStandardPattern",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerStandardPatternData.js.map
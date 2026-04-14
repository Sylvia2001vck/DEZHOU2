"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerStandardPattern = void 0;
/**
 * Data containing the standard pattern id.
 */
class SensitiveDataScannerStandardPattern {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerStandardPattern.attributeTypeMap;
    }
}
exports.SensitiveDataScannerStandardPattern = SensitiveDataScannerStandardPattern;
/**
 * @ignore
 */
SensitiveDataScannerStandardPattern.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SensitiveDataScannerStandardPatternType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerStandardPattern.js.map
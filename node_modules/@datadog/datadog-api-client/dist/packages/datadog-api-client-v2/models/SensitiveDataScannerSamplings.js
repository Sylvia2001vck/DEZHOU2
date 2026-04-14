"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerSamplings = void 0;
/**
 * Sampling configurations for the Scanning Group.
 */
class SensitiveDataScannerSamplings {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerSamplings.attributeTypeMap;
    }
}
exports.SensitiveDataScannerSamplings = SensitiveDataScannerSamplings;
/**
 * @ignore
 */
SensitiveDataScannerSamplings.attributeTypeMap = {
    product: {
        baseName: "product",
        type: "SensitiveDataScannerProduct",
    },
    rate: {
        baseName: "rate",
        type: "number",
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerSamplings.js.map
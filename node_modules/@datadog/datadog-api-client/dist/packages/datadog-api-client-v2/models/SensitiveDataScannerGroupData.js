"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerGroupData = void 0;
/**
 * A scanning group data.
 */
class SensitiveDataScannerGroupData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerGroupData.attributeTypeMap;
    }
}
exports.SensitiveDataScannerGroupData = SensitiveDataScannerGroupData;
/**
 * @ignore
 */
SensitiveDataScannerGroupData.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SensitiveDataScannerGroup",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerGroupData.js.map
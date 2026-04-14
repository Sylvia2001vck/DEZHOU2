"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerGroupUpdateResponse = void 0;
/**
 * Update group response.
 */
class SensitiveDataScannerGroupUpdateResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerGroupUpdateResponse.attributeTypeMap;
    }
}
exports.SensitiveDataScannerGroupUpdateResponse = SensitiveDataScannerGroupUpdateResponse;
/**
 * @ignore
 */
SensitiveDataScannerGroupUpdateResponse.attributeTypeMap = {
    meta: {
        baseName: "meta",
        type: "SensitiveDataScannerMetaVersionOnly",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerGroupUpdateResponse.js.map
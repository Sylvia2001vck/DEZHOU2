"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerGroupDeleteResponse = void 0;
/**
 * Delete group response.
 */
class SensitiveDataScannerGroupDeleteResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerGroupDeleteResponse.attributeTypeMap;
    }
}
exports.SensitiveDataScannerGroupDeleteResponse = SensitiveDataScannerGroupDeleteResponse;
/**
 * @ignore
 */
SensitiveDataScannerGroupDeleteResponse.attributeTypeMap = {
    meta: {
        baseName: "meta",
        type: "SensitiveDataScannerMetaVersionOnly",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerGroupDeleteResponse.js.map
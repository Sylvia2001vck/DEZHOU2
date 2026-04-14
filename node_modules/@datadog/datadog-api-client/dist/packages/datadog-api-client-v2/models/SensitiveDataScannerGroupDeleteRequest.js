"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerGroupDeleteRequest = void 0;
/**
 * Delete group request.
 */
class SensitiveDataScannerGroupDeleteRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerGroupDeleteRequest.attributeTypeMap;
    }
}
exports.SensitiveDataScannerGroupDeleteRequest = SensitiveDataScannerGroupDeleteRequest;
/**
 * @ignore
 */
SensitiveDataScannerGroupDeleteRequest.attributeTypeMap = {
    meta: {
        baseName: "meta",
        type: "SensitiveDataScannerMetaVersionOnly",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerGroupDeleteRequest.js.map
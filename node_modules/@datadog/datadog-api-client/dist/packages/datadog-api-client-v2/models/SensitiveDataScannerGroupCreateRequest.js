"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerGroupCreateRequest = void 0;
/**
 * Create group request.
 */
class SensitiveDataScannerGroupCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerGroupCreateRequest.attributeTypeMap;
    }
}
exports.SensitiveDataScannerGroupCreateRequest = SensitiveDataScannerGroupCreateRequest;
/**
 * @ignore
 */
SensitiveDataScannerGroupCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SensitiveDataScannerGroupCreate",
    },
    meta: {
        baseName: "meta",
        type: "SensitiveDataScannerMetaVersionOnly",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerGroupCreateRequest.js.map
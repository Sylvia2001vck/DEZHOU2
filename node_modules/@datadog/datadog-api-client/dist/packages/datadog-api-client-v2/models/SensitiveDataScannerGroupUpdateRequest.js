"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerGroupUpdateRequest = void 0;
/**
 * Update group request.
 */
class SensitiveDataScannerGroupUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerGroupUpdateRequest.attributeTypeMap;
    }
}
exports.SensitiveDataScannerGroupUpdateRequest = SensitiveDataScannerGroupUpdateRequest;
/**
 * @ignore
 */
SensitiveDataScannerGroupUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SensitiveDataScannerGroupUpdate",
        required: true,
    },
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
//# sourceMappingURL=SensitiveDataScannerGroupUpdateRequest.js.map
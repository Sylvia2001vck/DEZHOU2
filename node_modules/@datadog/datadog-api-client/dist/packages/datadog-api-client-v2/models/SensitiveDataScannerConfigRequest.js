"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerConfigRequest = void 0;
/**
 * Group reorder request.
 */
class SensitiveDataScannerConfigRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerConfigRequest.attributeTypeMap;
    }
}
exports.SensitiveDataScannerConfigRequest = SensitiveDataScannerConfigRequest;
/**
 * @ignore
 */
SensitiveDataScannerConfigRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SensitiveDataScannerReorderConfig",
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
//# sourceMappingURL=SensitiveDataScannerConfigRequest.js.map
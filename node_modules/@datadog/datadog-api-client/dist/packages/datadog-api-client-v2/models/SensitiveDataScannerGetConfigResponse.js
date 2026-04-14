"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerGetConfigResponse = void 0;
/**
 * Get all groups response.
 */
class SensitiveDataScannerGetConfigResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerGetConfigResponse.attributeTypeMap;
    }
}
exports.SensitiveDataScannerGetConfigResponse = SensitiveDataScannerGetConfigResponse;
/**
 * @ignore
 */
SensitiveDataScannerGetConfigResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SensitiveDataScannerGetConfigResponseData",
    },
    included: {
        baseName: "included",
        type: "Array<SensitiveDataScannerGetConfigIncludedItem>",
    },
    meta: {
        baseName: "meta",
        type: "SensitiveDataScannerMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerGetConfigResponse.js.map
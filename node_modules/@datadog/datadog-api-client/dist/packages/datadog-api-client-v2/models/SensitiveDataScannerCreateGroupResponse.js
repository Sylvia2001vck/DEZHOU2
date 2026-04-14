"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerCreateGroupResponse = void 0;
/**
 * Create group response.
 */
class SensitiveDataScannerCreateGroupResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerCreateGroupResponse.attributeTypeMap;
    }
}
exports.SensitiveDataScannerCreateGroupResponse = SensitiveDataScannerCreateGroupResponse;
/**
 * @ignore
 */
SensitiveDataScannerCreateGroupResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SensitiveDataScannerGroupResponse",
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
//# sourceMappingURL=SensitiveDataScannerCreateGroupResponse.js.map
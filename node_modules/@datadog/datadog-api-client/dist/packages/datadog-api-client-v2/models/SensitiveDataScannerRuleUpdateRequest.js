"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerRuleUpdateRequest = void 0;
/**
 * Update rule request.
 */
class SensitiveDataScannerRuleUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerRuleUpdateRequest.attributeTypeMap;
    }
}
exports.SensitiveDataScannerRuleUpdateRequest = SensitiveDataScannerRuleUpdateRequest;
/**
 * @ignore
 */
SensitiveDataScannerRuleUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SensitiveDataScannerRuleUpdate",
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
//# sourceMappingURL=SensitiveDataScannerRuleUpdateRequest.js.map
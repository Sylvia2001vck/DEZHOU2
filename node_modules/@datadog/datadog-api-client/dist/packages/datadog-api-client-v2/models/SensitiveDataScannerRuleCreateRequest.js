"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerRuleCreateRequest = void 0;
/**
 * Create rule request.
 */
class SensitiveDataScannerRuleCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerRuleCreateRequest.attributeTypeMap;
    }
}
exports.SensitiveDataScannerRuleCreateRequest = SensitiveDataScannerRuleCreateRequest;
/**
 * @ignore
 */
SensitiveDataScannerRuleCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SensitiveDataScannerRuleCreate",
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
//# sourceMappingURL=SensitiveDataScannerRuleCreateRequest.js.map
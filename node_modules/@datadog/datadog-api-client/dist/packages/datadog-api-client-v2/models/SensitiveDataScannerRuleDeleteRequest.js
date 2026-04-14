"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerRuleDeleteRequest = void 0;
/**
 * Delete rule request.
 */
class SensitiveDataScannerRuleDeleteRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerRuleDeleteRequest.attributeTypeMap;
    }
}
exports.SensitiveDataScannerRuleDeleteRequest = SensitiveDataScannerRuleDeleteRequest;
/**
 * @ignore
 */
SensitiveDataScannerRuleDeleteRequest.attributeTypeMap = {
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
//# sourceMappingURL=SensitiveDataScannerRuleDeleteRequest.js.map
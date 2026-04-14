"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerRuleDeleteResponse = void 0;
/**
 * Delete rule response.
 */
class SensitiveDataScannerRuleDeleteResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerRuleDeleteResponse.attributeTypeMap;
    }
}
exports.SensitiveDataScannerRuleDeleteResponse = SensitiveDataScannerRuleDeleteResponse;
/**
 * @ignore
 */
SensitiveDataScannerRuleDeleteResponse.attributeTypeMap = {
    meta: {
        baseName: "meta",
        type: "SensitiveDataScannerMetaVersionOnly",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerRuleDeleteResponse.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerCreateRuleResponse = void 0;
/**
 * Create rule response.
 */
class SensitiveDataScannerCreateRuleResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerCreateRuleResponse.attributeTypeMap;
    }
}
exports.SensitiveDataScannerCreateRuleResponse = SensitiveDataScannerCreateRuleResponse;
/**
 * @ignore
 */
SensitiveDataScannerCreateRuleResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SensitiveDataScannerRuleResponse",
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
//# sourceMappingURL=SensitiveDataScannerCreateRuleResponse.js.map
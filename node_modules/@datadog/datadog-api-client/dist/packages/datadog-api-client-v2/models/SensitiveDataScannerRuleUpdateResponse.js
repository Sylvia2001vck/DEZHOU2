"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerRuleUpdateResponse = void 0;
/**
 * Update rule response.
 */
class SensitiveDataScannerRuleUpdateResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerRuleUpdateResponse.attributeTypeMap;
    }
}
exports.SensitiveDataScannerRuleUpdateResponse = SensitiveDataScannerRuleUpdateResponse;
/**
 * @ignore
 */
SensitiveDataScannerRuleUpdateResponse.attributeTypeMap = {
    meta: {
        baseName: "meta",
        type: "SensitiveDataScannerMetaVersionOnly",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerRuleUpdateResponse.js.map
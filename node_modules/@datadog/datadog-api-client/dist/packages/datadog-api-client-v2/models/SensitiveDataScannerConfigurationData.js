"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerConfigurationData = void 0;
/**
 * A Sensitive Data Scanner configuration data.
 */
class SensitiveDataScannerConfigurationData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerConfigurationData.attributeTypeMap;
    }
}
exports.SensitiveDataScannerConfigurationData = SensitiveDataScannerConfigurationData;
/**
 * @ignore
 */
SensitiveDataScannerConfigurationData.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SensitiveDataScannerConfiguration",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerConfigurationData.js.map
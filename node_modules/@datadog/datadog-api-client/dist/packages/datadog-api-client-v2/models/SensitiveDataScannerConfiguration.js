"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerConfiguration = void 0;
/**
 * A Sensitive Data Scanner configuration.
 */
class SensitiveDataScannerConfiguration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerConfiguration.attributeTypeMap;
    }
}
exports.SensitiveDataScannerConfiguration = SensitiveDataScannerConfiguration;
/**
 * @ignore
 */
SensitiveDataScannerConfiguration.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SensitiveDataScannerConfigurationType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerConfiguration.js.map
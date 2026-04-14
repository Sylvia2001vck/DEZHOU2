"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerReorderConfig = void 0;
/**
 * Data related to the reordering of scanning groups.
 */
class SensitiveDataScannerReorderConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerReorderConfig.attributeTypeMap;
    }
}
exports.SensitiveDataScannerReorderConfig = SensitiveDataScannerReorderConfig;
/**
 * @ignore
 */
SensitiveDataScannerReorderConfig.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "SensitiveDataScannerConfigurationRelationships",
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
//# sourceMappingURL=SensitiveDataScannerReorderConfig.js.map
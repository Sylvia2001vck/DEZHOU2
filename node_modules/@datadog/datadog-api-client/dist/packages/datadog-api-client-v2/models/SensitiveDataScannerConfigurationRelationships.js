"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerConfigurationRelationships = void 0;
/**
 * Relationships of the configuration.
 */
class SensitiveDataScannerConfigurationRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerConfigurationRelationships.attributeTypeMap;
    }
}
exports.SensitiveDataScannerConfigurationRelationships = SensitiveDataScannerConfigurationRelationships;
/**
 * @ignore
 */
SensitiveDataScannerConfigurationRelationships.attributeTypeMap = {
    groups: {
        baseName: "groups",
        type: "SensitiveDataScannerGroupList",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerConfigurationRelationships.js.map
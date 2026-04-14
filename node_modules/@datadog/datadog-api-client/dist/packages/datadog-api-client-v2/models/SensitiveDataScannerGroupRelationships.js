"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerGroupRelationships = void 0;
/**
 * Relationships of the group.
 */
class SensitiveDataScannerGroupRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerGroupRelationships.attributeTypeMap;
    }
}
exports.SensitiveDataScannerGroupRelationships = SensitiveDataScannerGroupRelationships;
/**
 * @ignore
 */
SensitiveDataScannerGroupRelationships.attributeTypeMap = {
    configuration: {
        baseName: "configuration",
        type: "SensitiveDataScannerConfigurationData",
    },
    rules: {
        baseName: "rules",
        type: "SensitiveDataScannerRuleData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerGroupRelationships.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerGetConfigResponseData = void 0;
/**
 * Response data related to the scanning groups.
 */
class SensitiveDataScannerGetConfigResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerGetConfigResponseData.attributeTypeMap;
    }
}
exports.SensitiveDataScannerGetConfigResponseData = SensitiveDataScannerGetConfigResponseData;
/**
 * @ignore
 */
SensitiveDataScannerGetConfigResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "{ [key: string]: any; }",
    },
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
//# sourceMappingURL=SensitiveDataScannerGetConfigResponseData.js.map
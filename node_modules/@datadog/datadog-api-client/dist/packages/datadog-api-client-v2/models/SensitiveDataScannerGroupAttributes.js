"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerGroupAttributes = void 0;
/**
 * Attributes of the Sensitive Data Scanner group.
 */
class SensitiveDataScannerGroupAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerGroupAttributes.attributeTypeMap;
    }
}
exports.SensitiveDataScannerGroupAttributes = SensitiveDataScannerGroupAttributes;
/**
 * @ignore
 */
SensitiveDataScannerGroupAttributes.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
    },
    filter: {
        baseName: "filter",
        type: "SensitiveDataScannerFilter",
    },
    isEnabled: {
        baseName: "is_enabled",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    productList: {
        baseName: "product_list",
        type: "Array<SensitiveDataScannerProduct>",
    },
    samplings: {
        baseName: "samplings",
        type: "Array<SensitiveDataScannerSamplings>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerGroupAttributes.js.map
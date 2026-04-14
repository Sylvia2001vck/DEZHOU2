"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerGroupIncludedItem = void 0;
/**
 * A Scanning Group included item.
 */
class SensitiveDataScannerGroupIncludedItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerGroupIncludedItem.attributeTypeMap;
    }
}
exports.SensitiveDataScannerGroupIncludedItem = SensitiveDataScannerGroupIncludedItem;
/**
 * @ignore
 */
SensitiveDataScannerGroupIncludedItem.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SensitiveDataScannerGroupAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "SensitiveDataScannerGroupRelationships",
    },
    type: {
        baseName: "type",
        type: "SensitiveDataScannerGroupType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerGroupIncludedItem.js.map
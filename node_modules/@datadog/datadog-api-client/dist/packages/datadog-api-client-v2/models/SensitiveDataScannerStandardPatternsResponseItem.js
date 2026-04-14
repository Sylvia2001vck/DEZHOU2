"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerStandardPatternsResponseItem = void 0;
/**
 * Standard pattern item.
 */
class SensitiveDataScannerStandardPatternsResponseItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerStandardPatternsResponseItem.attributeTypeMap;
    }
}
exports.SensitiveDataScannerStandardPatternsResponseItem = SensitiveDataScannerStandardPatternsResponseItem;
/**
 * @ignore
 */
SensitiveDataScannerStandardPatternsResponseItem.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SensitiveDataScannerStandardPatternAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SensitiveDataScannerStandardPatternType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerStandardPatternsResponseItem.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerGroupItem = void 0;
/**
 * Data related to a Sensitive Data Scanner Group.
 */
class SensitiveDataScannerGroupItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerGroupItem.attributeTypeMap;
    }
}
exports.SensitiveDataScannerGroupItem = SensitiveDataScannerGroupItem;
/**
 * @ignore
 */
SensitiveDataScannerGroupItem.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=SensitiveDataScannerGroupItem.js.map
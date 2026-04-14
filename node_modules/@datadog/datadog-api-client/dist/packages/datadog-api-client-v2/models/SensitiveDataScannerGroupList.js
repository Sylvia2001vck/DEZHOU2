"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerGroupList = void 0;
/**
 * List of groups, ordered.
 */
class SensitiveDataScannerGroupList {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerGroupList.attributeTypeMap;
    }
}
exports.SensitiveDataScannerGroupList = SensitiveDataScannerGroupList;
/**
 * @ignore
 */
SensitiveDataScannerGroupList.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<SensitiveDataScannerGroupItem>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerGroupList.js.map
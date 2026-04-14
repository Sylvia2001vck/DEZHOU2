"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerGroup = void 0;
/**
 * A scanning group.
 */
class SensitiveDataScannerGroup {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerGroup.attributeTypeMap;
    }
}
exports.SensitiveDataScannerGroup = SensitiveDataScannerGroup;
/**
 * @ignore
 */
SensitiveDataScannerGroup.attributeTypeMap = {
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
//# sourceMappingURL=SensitiveDataScannerGroup.js.map
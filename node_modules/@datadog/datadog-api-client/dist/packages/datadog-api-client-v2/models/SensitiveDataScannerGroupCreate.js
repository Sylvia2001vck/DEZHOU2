"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerGroupCreate = void 0;
/**
 * Data related to the creation of a group.
 */
class SensitiveDataScannerGroupCreate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerGroupCreate.attributeTypeMap;
    }
}
exports.SensitiveDataScannerGroupCreate = SensitiveDataScannerGroupCreate;
/**
 * @ignore
 */
SensitiveDataScannerGroupCreate.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SensitiveDataScannerGroupAttributes",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "SensitiveDataScannerGroupRelationships",
    },
    type: {
        baseName: "type",
        type: "SensitiveDataScannerGroupType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerGroupCreate.js.map
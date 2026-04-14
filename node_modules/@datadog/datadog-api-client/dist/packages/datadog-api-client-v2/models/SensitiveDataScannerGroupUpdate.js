"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerGroupUpdate = void 0;
/**
 * Data related to the update of a group.
 */
class SensitiveDataScannerGroupUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerGroupUpdate.attributeTypeMap;
    }
}
exports.SensitiveDataScannerGroupUpdate = SensitiveDataScannerGroupUpdate;
/**
 * @ignore
 */
SensitiveDataScannerGroupUpdate.attributeTypeMap = {
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
//# sourceMappingURL=SensitiveDataScannerGroupUpdate.js.map
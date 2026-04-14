"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerGroupResponse = void 0;
/**
 * Response data related to the creation of a group.
 */
class SensitiveDataScannerGroupResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerGroupResponse.attributeTypeMap;
    }
}
exports.SensitiveDataScannerGroupResponse = SensitiveDataScannerGroupResponse;
/**
 * @ignore
 */
SensitiveDataScannerGroupResponse.attributeTypeMap = {
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
//# sourceMappingURL=SensitiveDataScannerGroupResponse.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveDataScannerReorderGroupsResponse = void 0;
/**
 * Group reorder response.
 */
class SensitiveDataScannerReorderGroupsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SensitiveDataScannerReorderGroupsResponse.attributeTypeMap;
    }
}
exports.SensitiveDataScannerReorderGroupsResponse = SensitiveDataScannerReorderGroupsResponse;
/**
 * @ignore
 */
SensitiveDataScannerReorderGroupsResponse.attributeTypeMap = {
    meta: {
        baseName: "meta",
        type: "SensitiveDataScannerMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SensitiveDataScannerReorderGroupsResponse.js.map
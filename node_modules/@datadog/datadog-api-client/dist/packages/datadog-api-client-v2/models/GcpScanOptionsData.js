"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcpScanOptionsData = void 0;
/**
 * Single GCP scan options entry.
 */
class GcpScanOptionsData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GcpScanOptionsData.attributeTypeMap;
    }
}
exports.GcpScanOptionsData = GcpScanOptionsData;
/**
 * @ignore
 */
GcpScanOptionsData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "GcpScanOptionsDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "GcpScanOptionsDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GcpScanOptionsData.js.map
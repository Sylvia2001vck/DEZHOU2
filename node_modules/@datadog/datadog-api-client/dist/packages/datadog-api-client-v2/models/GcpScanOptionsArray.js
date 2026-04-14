"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcpScanOptionsArray = void 0;
/**
 * Response object containing a list of GCP scan options.
 */
class GcpScanOptionsArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GcpScanOptionsArray.attributeTypeMap;
    }
}
exports.GcpScanOptionsArray = GcpScanOptionsArray;
/**
 * @ignore
 */
GcpScanOptionsArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<GcpScanOptionsData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GcpScanOptionsArray.js.map
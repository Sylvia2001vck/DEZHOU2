"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcpScanOptions = void 0;
/**
 * Response object containing GCP scan options for a single project.
 */
class GcpScanOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GcpScanOptions.attributeTypeMap;
    }
}
exports.GcpScanOptions = GcpScanOptions;
/**
 * @ignore
 */
GcpScanOptions.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "GcpScanOptionsData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GcpScanOptions.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcpScanOptionsInputUpdateData = void 0;
/**
 * Data object for updating the scan options of a single GCP project.
 */
class GcpScanOptionsInputUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GcpScanOptionsInputUpdateData.attributeTypeMap;
    }
}
exports.GcpScanOptionsInputUpdateData = GcpScanOptionsInputUpdateData;
/**
 * @ignore
 */
GcpScanOptionsInputUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "GcpScanOptionsInputUpdateDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "GcpScanOptionsInputUpdateDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GcpScanOptionsInputUpdateData.js.map
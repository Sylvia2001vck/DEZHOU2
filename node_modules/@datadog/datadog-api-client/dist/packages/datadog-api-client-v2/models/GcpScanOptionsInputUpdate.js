"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GcpScanOptionsInputUpdate = void 0;
/**
 * Request object for updating GCP scan options.
 */
class GcpScanOptionsInputUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GcpScanOptionsInputUpdate.attributeTypeMap;
    }
}
exports.GcpScanOptionsInputUpdate = GcpScanOptionsInputUpdate;
/**
 * @ignore
 */
GcpScanOptionsInputUpdate.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "GcpScanOptionsInputUpdateData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GcpScanOptionsInputUpdate.js.map
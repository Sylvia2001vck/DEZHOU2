"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchTableRequestData = void 0;
/**
 * The data object containing the partial table definition updates.
 */
class PatchTableRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PatchTableRequestData.attributeTypeMap;
    }
}
exports.PatchTableRequestData = PatchTableRequestData;
/**
 * @ignore
 */
PatchTableRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "PatchTableRequestDataAttributes",
    },
    type: {
        baseName: "type",
        type: "PatchTableRequestDataType",
        required: true,
    },
};
//# sourceMappingURL=PatchTableRequestData.js.map
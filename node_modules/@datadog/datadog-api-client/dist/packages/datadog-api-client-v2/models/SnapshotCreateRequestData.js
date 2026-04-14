"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotCreateRequestData = void 0;
class SnapshotCreateRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SnapshotCreateRequestData.attributeTypeMap;
    }
}
exports.SnapshotCreateRequestData = SnapshotCreateRequestData;
/**
 * @ignore
 */
SnapshotCreateRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SnapshotCreateRequestDataAttributes",
    },
    type: {
        baseName: "type",
        type: "SnapshotUpdateRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SnapshotCreateRequestData.js.map
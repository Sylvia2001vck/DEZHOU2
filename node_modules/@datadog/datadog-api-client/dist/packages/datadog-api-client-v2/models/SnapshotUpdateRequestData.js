"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotUpdateRequestData = void 0;
class SnapshotUpdateRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SnapshotUpdateRequestData.attributeTypeMap;
    }
}
exports.SnapshotUpdateRequestData = SnapshotUpdateRequestData;
/**
 * @ignore
 */
SnapshotUpdateRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SnapshotUpdateRequestDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=SnapshotUpdateRequestData.js.map
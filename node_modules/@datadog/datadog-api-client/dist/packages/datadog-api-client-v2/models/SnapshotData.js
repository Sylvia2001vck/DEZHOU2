"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotData = void 0;
class SnapshotData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SnapshotData.attributeTypeMap;
    }
}
exports.SnapshotData = SnapshotData;
/**
 * @ignore
 */
SnapshotData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SnapshotDataAttributes",
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
//# sourceMappingURL=SnapshotData.js.map
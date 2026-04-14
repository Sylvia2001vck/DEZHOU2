"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotArray = void 0;
class SnapshotArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SnapshotArray.attributeTypeMap;
    }
}
exports.SnapshotArray = SnapshotArray;
/**
 * @ignore
 */
SnapshotArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<SnapshotData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SnapshotArray.js.map
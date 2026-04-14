"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snapshot = void 0;
class Snapshot {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Snapshot.attributeTypeMap;
    }
}
exports.Snapshot = Snapshot;
/**
 * @ignore
 */
Snapshot.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SnapshotData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Snapshot.js.map
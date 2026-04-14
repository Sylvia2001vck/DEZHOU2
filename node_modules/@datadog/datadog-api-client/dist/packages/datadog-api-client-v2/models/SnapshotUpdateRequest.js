"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotUpdateRequest = void 0;
class SnapshotUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SnapshotUpdateRequest.attributeTypeMap;
    }
}
exports.SnapshotUpdateRequest = SnapshotUpdateRequest;
/**
 * @ignore
 */
SnapshotUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SnapshotUpdateRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SnapshotUpdateRequest.js.map
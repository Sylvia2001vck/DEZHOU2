"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotCreateRequest = void 0;
class SnapshotCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SnapshotCreateRequest.attributeTypeMap;
    }
}
exports.SnapshotCreateRequest = SnapshotCreateRequest;
/**
 * @ignore
 */
SnapshotCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SnapshotCreateRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SnapshotCreateRequest.js.map
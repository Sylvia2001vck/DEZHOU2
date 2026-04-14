"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchTableRequest = void 0;
/**
 * Request body for updating an existing reference table.
 */
class PatchTableRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PatchTableRequest.attributeTypeMap;
    }
}
exports.PatchTableRequest = PatchTableRequest;
/**
 * @ignore
 */
PatchTableRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "PatchTableRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PatchTableRequest.js.map
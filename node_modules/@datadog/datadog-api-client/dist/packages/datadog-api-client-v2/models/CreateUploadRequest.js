"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUploadRequest = void 0;
/**
 * Request to create an upload for a file to be ingested into a reference table.
 */
class CreateUploadRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateUploadRequest.attributeTypeMap;
    }
}
exports.CreateUploadRequest = CreateUploadRequest;
/**
 * @ignore
 */
CreateUploadRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CreateUploadRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateUploadRequest.js.map
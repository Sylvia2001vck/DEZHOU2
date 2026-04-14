"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUploadResponse = void 0;
/**
 * Information about the upload created containing the upload ID and pre-signed URLs to PUT chunks of the CSV file to.
 */
class CreateUploadResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateUploadResponse.attributeTypeMap;
    }
}
exports.CreateUploadResponse = CreateUploadResponse;
/**
 * @ignore
 */
CreateUploadResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CreateUploadResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateUploadResponse.js.map
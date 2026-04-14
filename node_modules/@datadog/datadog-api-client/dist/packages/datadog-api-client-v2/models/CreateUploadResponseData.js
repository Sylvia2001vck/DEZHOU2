"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUploadResponseData = void 0;
/**
 * Upload ID and attributes of the created upload.
 */
class CreateUploadResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateUploadResponseData.attributeTypeMap;
    }
}
exports.CreateUploadResponseData = CreateUploadResponseData;
/**
 * @ignore
 */
CreateUploadResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CreateUploadResponseDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "CreateUploadResponseDataType",
        required: true,
    },
};
//# sourceMappingURL=CreateUploadResponseData.js.map
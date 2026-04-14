"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUploadRequestData = void 0;
/**
 * Request data for creating an upload for a file to be ingested into a reference table.
 */
class CreateUploadRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateUploadRequestData.attributeTypeMap;
    }
}
exports.CreateUploadRequestData = CreateUploadRequestData;
/**
 * @ignore
 */
CreateUploadRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CreateUploadRequestDataAttributes",
    },
    type: {
        baseName: "type",
        type: "CreateUploadRequestDataType",
        required: true,
    },
};
//# sourceMappingURL=CreateUploadRequestData.js.map
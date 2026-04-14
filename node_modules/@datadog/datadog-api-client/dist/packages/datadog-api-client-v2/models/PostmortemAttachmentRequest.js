"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostmortemAttachmentRequest = void 0;
class PostmortemAttachmentRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PostmortemAttachmentRequest.attributeTypeMap;
    }
}
exports.PostmortemAttachmentRequest = PostmortemAttachmentRequest;
/**
 * @ignore
 */
PostmortemAttachmentRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "PostmortemAttachmentRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PostmortemAttachmentRequest.js.map
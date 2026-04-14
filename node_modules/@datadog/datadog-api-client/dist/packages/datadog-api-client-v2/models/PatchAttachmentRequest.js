"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchAttachmentRequest = void 0;
/**
 * Request to update an attachment.
 */
class PatchAttachmentRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PatchAttachmentRequest.attributeTypeMap;
    }
}
exports.PatchAttachmentRequest = PatchAttachmentRequest;
/**
 * @ignore
 */
PatchAttachmentRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "PatchAttachmentRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PatchAttachmentRequest.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostmortemAttachmentRequestData = void 0;
/**
 * Postmortem attachment data
 */
class PostmortemAttachmentRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PostmortemAttachmentRequestData.attributeTypeMap;
    }
}
exports.PostmortemAttachmentRequestData = PostmortemAttachmentRequestData;
/**
 * @ignore
 */
PostmortemAttachmentRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "PostmortemAttachmentRequestAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "IncidentAttachmentType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PostmortemAttachmentRequestData.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostmortemAttachmentRequestAttributes = void 0;
/**
 * Postmortem attachment attributes
 */
class PostmortemAttachmentRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PostmortemAttachmentRequestAttributes.attributeTypeMap;
    }
}
exports.PostmortemAttachmentRequestAttributes = PostmortemAttachmentRequestAttributes;
/**
 * @ignore
 */
PostmortemAttachmentRequestAttributes.attributeTypeMap = {
    cells: {
        baseName: "cells",
        type: "Array<PostmortemCell>",
    },
    content: {
        baseName: "content",
        type: "string",
    },
    postmortemTemplateId: {
        baseName: "postmortem_template_id",
        type: "string",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PostmortemAttachmentRequestAttributes.js.map
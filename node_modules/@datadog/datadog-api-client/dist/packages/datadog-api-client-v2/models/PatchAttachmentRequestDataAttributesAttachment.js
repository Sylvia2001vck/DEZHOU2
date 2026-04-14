"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchAttachmentRequestDataAttributesAttachment = void 0;
/**
 * The updated attachment object.
 */
class PatchAttachmentRequestDataAttributesAttachment {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PatchAttachmentRequestDataAttributesAttachment.attributeTypeMap;
    }
}
exports.PatchAttachmentRequestDataAttributesAttachment = PatchAttachmentRequestDataAttributesAttachment;
/**
 * @ignore
 */
PatchAttachmentRequestDataAttributesAttachment.attributeTypeMap = {
    documentUrl: {
        baseName: "documentUrl",
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
//# sourceMappingURL=PatchAttachmentRequestDataAttributesAttachment.js.map
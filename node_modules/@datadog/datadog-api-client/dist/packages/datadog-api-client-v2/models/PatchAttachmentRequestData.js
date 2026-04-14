"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchAttachmentRequestData = void 0;
/**
 * Attachment data for an update request.
 */
class PatchAttachmentRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PatchAttachmentRequestData.attributeTypeMap;
    }
}
exports.PatchAttachmentRequestData = PatchAttachmentRequestData;
/**
 * @ignore
 */
PatchAttachmentRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "PatchAttachmentRequestDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=PatchAttachmentRequestData.js.map
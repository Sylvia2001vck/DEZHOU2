"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToIncidentAttachment = void 0;
/**
 * A relationship reference for attachments.
 */
class RelationshipToIncidentAttachment {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToIncidentAttachment.attributeTypeMap;
    }
}
exports.RelationshipToIncidentAttachment = RelationshipToIncidentAttachment;
/**
 * @ignore
 */
RelationshipToIncidentAttachment.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<RelationshipToIncidentAttachmentData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToIncidentAttachment.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToIncidentAttachmentData = void 0;
/**
 * The attachment relationship data.
 */
class RelationshipToIncidentAttachmentData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToIncidentAttachmentData.attributeTypeMap;
    }
}
exports.RelationshipToIncidentAttachmentData = RelationshipToIncidentAttachmentData;
/**
 * @ignore
 */
RelationshipToIncidentAttachmentData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=RelationshipToIncidentAttachmentData.js.map
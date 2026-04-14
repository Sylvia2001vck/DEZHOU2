"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTimelineCellMarkdownCreateAttributes = void 0;
/**
 * Timeline cell data for Markdown timeline cells for a create request.
 */
class IncidentTimelineCellMarkdownCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTimelineCellMarkdownCreateAttributes.attributeTypeMap;
    }
}
exports.IncidentTimelineCellMarkdownCreateAttributes = IncidentTimelineCellMarkdownCreateAttributes;
/**
 * @ignore
 */
IncidentTimelineCellMarkdownCreateAttributes.attributeTypeMap = {
    cellType: {
        baseName: "cell_type",
        type: "IncidentTimelineCellMarkdownContentType",
        required: true,
    },
    content: {
        baseName: "content",
        type: "IncidentTimelineCellMarkdownCreateAttributesContent",
        required: true,
    },
    important: {
        baseName: "important",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentTimelineCellMarkdownCreateAttributes.js.map
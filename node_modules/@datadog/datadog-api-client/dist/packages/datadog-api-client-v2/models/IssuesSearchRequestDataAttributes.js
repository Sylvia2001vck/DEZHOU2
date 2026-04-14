"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuesSearchRequestDataAttributes = void 0;
/**
 * Object describing a search issue request.
 */
class IssuesSearchRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssuesSearchRequestDataAttributes.attributeTypeMap;
    }
}
exports.IssuesSearchRequestDataAttributes = IssuesSearchRequestDataAttributes;
/**
 * @ignore
 */
IssuesSearchRequestDataAttributes.attributeTypeMap = {
    from: {
        baseName: "from",
        type: "number",
        required: true,
        format: "int64",
    },
    orderBy: {
        baseName: "order_by",
        type: "IssuesSearchRequestDataAttributesOrderBy",
    },
    persona: {
        baseName: "persona",
        type: "IssuesSearchRequestDataAttributesPersona",
    },
    query: {
        baseName: "query",
        type: "string",
        required: true,
    },
    to: {
        baseName: "to",
        type: "number",
        required: true,
        format: "int64",
    },
    track: {
        baseName: "track",
        type: "IssuesSearchRequestDataAttributesTrack",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IssuesSearchRequestDataAttributes.js.map
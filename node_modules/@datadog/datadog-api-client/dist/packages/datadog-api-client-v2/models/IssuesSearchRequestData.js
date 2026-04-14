"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuesSearchRequestData = void 0;
/**
 * Search issues request.
 */
class IssuesSearchRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssuesSearchRequestData.attributeTypeMap;
    }
}
exports.IssuesSearchRequestData = IssuesSearchRequestData;
/**
 * @ignore
 */
IssuesSearchRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IssuesSearchRequestDataAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "IssuesSearchRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IssuesSearchRequestData.js.map
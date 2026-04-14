"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpdateStateRequestData = void 0;
/**
 * Update issue state request.
 */
class IssueUpdateStateRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssueUpdateStateRequestData.attributeTypeMap;
    }
}
exports.IssueUpdateStateRequestData = IssueUpdateStateRequestData;
/**
 * @ignore
 */
IssueUpdateStateRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IssueUpdateStateRequestDataAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "IssueUpdateStateRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IssueUpdateStateRequestData.js.map
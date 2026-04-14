"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpdateStateRequest = void 0;
/**
 * Update issue state request payload.
 */
class IssueUpdateStateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssueUpdateStateRequest.attributeTypeMap;
    }
}
exports.IssueUpdateStateRequest = IssueUpdateStateRequest;
/**
 * @ignore
 */
IssueUpdateStateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IssueUpdateStateRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IssueUpdateStateRequest.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpdateStateRequestDataAttributes = void 0;
/**
 * Object describing an issue state update request.
 */
class IssueUpdateStateRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssueUpdateStateRequestDataAttributes.attributeTypeMap;
    }
}
exports.IssueUpdateStateRequestDataAttributes = IssueUpdateStateRequestDataAttributes;
/**
 * @ignore
 */
IssueUpdateStateRequestDataAttributes.attributeTypeMap = {
    state: {
        baseName: "state",
        type: "IssueState",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IssueUpdateStateRequestDataAttributes.js.map
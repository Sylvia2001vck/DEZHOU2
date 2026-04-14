"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRequestDecisionCreateAttributes = void 0;
/**
 * Attributes for creating a change request decision.
 */
class ChangeRequestDecisionCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeRequestDecisionCreateAttributes.attributeTypeMap;
    }
}
exports.ChangeRequestDecisionCreateAttributes = ChangeRequestDecisionCreateAttributes;
/**
 * @ignore
 */
ChangeRequestDecisionCreateAttributes.attributeTypeMap = {
    changeRequestStatus: {
        baseName: "change_request_status",
        type: "ChangeRequestDecisionStatusType",
    },
    requestReason: {
        baseName: "request_reason",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeRequestDecisionCreateAttributes.js.map
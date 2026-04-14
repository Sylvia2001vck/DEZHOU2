"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRequestDecisionResponseAttributes = void 0;
/**
 * Attributes of a change request decision in a response.
 */
class ChangeRequestDecisionResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeRequestDecisionResponseAttributes.attributeTypeMap;
    }
}
exports.ChangeRequestDecisionResponseAttributes = ChangeRequestDecisionResponseAttributes;
/**
 * @ignore
 */
ChangeRequestDecisionResponseAttributes.attributeTypeMap = {
    changeRequestStatus: {
        baseName: "change_request_status",
        type: "ChangeRequestDecisionStatusType",
        required: true,
    },
    decidedAt: {
        baseName: "decided_at",
        type: "Date",
        required: true,
        format: "date-time",
    },
    decisionReason: {
        baseName: "decision_reason",
        type: "string",
        required: true,
    },
    deletedAt: {
        baseName: "deleted_at",
        type: "Date",
        required: true,
        format: "date-time",
    },
    requestReason: {
        baseName: "request_reason",
        type: "string",
        required: true,
    },
    requestedAt: {
        baseName: "requested_at",
        type: "Date",
        required: true,
        format: "date-time",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeRequestDecisionResponseAttributes.js.map
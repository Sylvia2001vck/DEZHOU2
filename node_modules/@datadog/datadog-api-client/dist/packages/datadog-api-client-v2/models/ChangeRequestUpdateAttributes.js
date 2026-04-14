"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRequestUpdateAttributes = void 0;
/**
 * Attributes for updating a change request.
 */
class ChangeRequestUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeRequestUpdateAttributes.attributeTypeMap;
    }
}
exports.ChangeRequestUpdateAttributes = ChangeRequestUpdateAttributes;
/**
 * @ignore
 */
ChangeRequestUpdateAttributes.attributeTypeMap = {
    changeRequestPlan: {
        baseName: "change_request_plan",
        type: "string",
    },
    changeRequestRisk: {
        baseName: "change_request_risk",
        type: "ChangeRequestRiskLevel",
    },
    changeRequestType: {
        baseName: "change_request_type",
        type: "ChangeRequestChangeType",
    },
    endDate: {
        baseName: "end_date",
        type: "Date",
        format: "date-time",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    startDate: {
        baseName: "start_date",
        type: "Date",
        format: "date-time",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeRequestUpdateAttributes.js.map
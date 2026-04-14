"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectedCostAttributes = void 0;
/**
 * Projected Cost attributes data.
 */
class ProjectedCostAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProjectedCostAttributes.attributeTypeMap;
    }
}
exports.ProjectedCostAttributes = ProjectedCostAttributes;
/**
 * @ignore
 */
ProjectedCostAttributes.attributeTypeMap = {
    accountName: {
        baseName: "account_name",
        type: "string",
    },
    accountPublicId: {
        baseName: "account_public_id",
        type: "string",
    },
    charges: {
        baseName: "charges",
        type: "Array<ChargebackBreakdown>",
    },
    date: {
        baseName: "date",
        type: "Date",
        format: "date-time",
    },
    orgName: {
        baseName: "org_name",
        type: "string",
    },
    projectedTotalCost: {
        baseName: "projected_total_cost",
        type: "number",
        format: "double",
    },
    publicId: {
        baseName: "public_id",
        type: "string",
    },
    region: {
        baseName: "region",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProjectedCostAttributes.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomCostsFileMetadata = void 0;
/**
 * Schema of a Custom Costs metadata.
 */
class CustomCostsFileMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomCostsFileMetadata.attributeTypeMap;
    }
}
exports.CustomCostsFileMetadata = CustomCostsFileMetadata;
/**
 * @ignore
 */
CustomCostsFileMetadata.attributeTypeMap = {
    billedCost: {
        baseName: "billed_cost",
        type: "number",
        format: "double",
    },
    billingCurrency: {
        baseName: "billing_currency",
        type: "string",
    },
    chargePeriod: {
        baseName: "charge_period",
        type: "CustomCostsFileUsageChargePeriod",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    providerNames: {
        baseName: "provider_names",
        type: "Array<string>",
    },
    status: {
        baseName: "status",
        type: "string",
    },
    uploadedAt: {
        baseName: "uploaded_at",
        type: "number",
        format: "double",
    },
    uploadedBy: {
        baseName: "uploaded_by",
        type: "CustomCostsUser",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomCostsFileMetadata.js.map
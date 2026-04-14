"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomCostsFileMetadataWithContent = void 0;
/**
 * Schema of a cost file's metadata.
 */
class CustomCostsFileMetadataWithContent {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomCostsFileMetadataWithContent.attributeTypeMap;
    }
}
exports.CustomCostsFileMetadataWithContent = CustomCostsFileMetadataWithContent;
/**
 * @ignore
 */
CustomCostsFileMetadataWithContent.attributeTypeMap = {
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
    content: {
        baseName: "content",
        type: "Array<CustomCostsFileLineItem>",
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
//# sourceMappingURL=CustomCostsFileMetadataWithContent.js.map
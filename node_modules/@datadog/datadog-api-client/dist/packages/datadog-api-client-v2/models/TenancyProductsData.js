"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenancyProductsData = void 0;
class TenancyProductsData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TenancyProductsData.attributeTypeMap;
    }
}
exports.TenancyProductsData = TenancyProductsData;
/**
 * @ignore
 */
TenancyProductsData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "TenancyProductsDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "TenancyProductsDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TenancyProductsData.js.map
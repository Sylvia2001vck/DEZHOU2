"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenancyProductsList = void 0;
class TenancyProductsList {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TenancyProductsList.attributeTypeMap;
    }
}
exports.TenancyProductsList = TenancyProductsList;
/**
 * @ignore
 */
TenancyProductsList.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<TenancyProductsData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TenancyProductsList.js.map
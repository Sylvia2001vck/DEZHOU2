"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacetInfoResponseDataAttributesResult = void 0;
class FacetInfoResponseDataAttributesResult {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FacetInfoResponseDataAttributesResult.attributeTypeMap;
    }
}
exports.FacetInfoResponseDataAttributesResult = FacetInfoResponseDataAttributesResult;
/**
 * @ignore
 */
FacetInfoResponseDataAttributesResult.attributeTypeMap = {
    range: {
        baseName: "range",
        type: "FacetInfoResponseDataAttributesResultRange",
    },
    values: {
        baseName: "values",
        type: "Array<FacetInfoResponseDataAttributesResultValuesItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FacetInfoResponseDataAttributesResult.js.map
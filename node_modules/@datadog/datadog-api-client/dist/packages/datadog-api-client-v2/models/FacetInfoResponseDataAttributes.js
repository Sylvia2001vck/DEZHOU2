"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacetInfoResponseDataAttributes = void 0;
class FacetInfoResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FacetInfoResponseDataAttributes.attributeTypeMap;
    }
}
exports.FacetInfoResponseDataAttributes = FacetInfoResponseDataAttributes;
/**
 * @ignore
 */
FacetInfoResponseDataAttributes.attributeTypeMap = {
    result: {
        baseName: "result",
        type: "FacetInfoResponseDataAttributesResult",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FacetInfoResponseDataAttributes.js.map
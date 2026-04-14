"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacetInfoResponseData = void 0;
class FacetInfoResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FacetInfoResponseData.attributeTypeMap;
    }
}
exports.FacetInfoResponseData = FacetInfoResponseData;
/**
 * @ignore
 */
FacetInfoResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "FacetInfoResponseDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "FacetInfoResponseDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FacetInfoResponseData.js.map
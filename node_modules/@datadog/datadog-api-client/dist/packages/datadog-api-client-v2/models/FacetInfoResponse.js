"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacetInfoResponse = void 0;
class FacetInfoResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FacetInfoResponse.attributeTypeMap;
    }
}
exports.FacetInfoResponse = FacetInfoResponse;
/**
 * @ignore
 */
FacetInfoResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "FacetInfoResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FacetInfoResponse.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacetInfoRequest = void 0;
class FacetInfoRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FacetInfoRequest.attributeTypeMap;
    }
}
exports.FacetInfoRequest = FacetInfoRequest;
/**
 * @ignore
 */
FacetInfoRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "FacetInfoRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FacetInfoRequest.js.map
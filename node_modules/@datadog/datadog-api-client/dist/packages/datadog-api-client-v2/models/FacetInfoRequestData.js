"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacetInfoRequestData = void 0;
class FacetInfoRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FacetInfoRequestData.attributeTypeMap;
    }
}
exports.FacetInfoRequestData = FacetInfoRequestData;
/**
 * @ignore
 */
FacetInfoRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "FacetInfoRequestDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "FacetInfoRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FacetInfoRequestData.js.map
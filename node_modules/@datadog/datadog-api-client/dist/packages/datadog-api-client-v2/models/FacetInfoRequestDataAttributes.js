"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacetInfoRequestDataAttributes = void 0;
class FacetInfoRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FacetInfoRequestDataAttributes.attributeTypeMap;
    }
}
exports.FacetInfoRequestDataAttributes = FacetInfoRequestDataAttributes;
/**
 * @ignore
 */
FacetInfoRequestDataAttributes.attributeTypeMap = {
    facetId: {
        baseName: "facet_id",
        type: "string",
        required: true,
    },
    limit: {
        baseName: "limit",
        type: "number",
        required: true,
        format: "int64",
    },
    search: {
        baseName: "search",
        type: "FacetInfoRequestDataAttributesSearch",
    },
    termSearch: {
        baseName: "term_search",
        type: "FacetInfoRequestDataAttributesTermSearch",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FacetInfoRequestDataAttributes.js.map
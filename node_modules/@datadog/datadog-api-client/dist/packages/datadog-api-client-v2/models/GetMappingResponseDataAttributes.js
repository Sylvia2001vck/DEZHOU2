"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMappingResponseDataAttributes = void 0;
class GetMappingResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetMappingResponseDataAttributes.attributeTypeMap;
    }
}
exports.GetMappingResponseDataAttributes = GetMappingResponseDataAttributes;
/**
 * @ignore
 */
GetMappingResponseDataAttributes.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "Array<GetMappingResponseDataAttributesAttributesItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GetMappingResponseDataAttributes.js.map
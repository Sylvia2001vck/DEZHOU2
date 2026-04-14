"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesValidateQueryResponseData = void 0;
/**
 * The definition of `RulesValidateQueryResponseData` object.
 */
class RulesValidateQueryResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RulesValidateQueryResponseData.attributeTypeMap;
    }
}
exports.RulesValidateQueryResponseData = RulesValidateQueryResponseData;
/**
 * @ignore
 */
RulesValidateQueryResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RulesValidateQueryResponseDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "RulesValidateQueryResponseDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RulesValidateQueryResponseData.js.map
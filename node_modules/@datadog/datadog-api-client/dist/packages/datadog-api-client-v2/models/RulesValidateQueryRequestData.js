"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesValidateQueryRequestData = void 0;
/**
 * The definition of `RulesValidateQueryRequestData` object.
 */
class RulesValidateQueryRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RulesValidateQueryRequestData.attributeTypeMap;
    }
}
exports.RulesValidateQueryRequestData = RulesValidateQueryRequestData;
/**
 * @ignore
 */
RulesValidateQueryRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RulesValidateQueryRequestDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "RulesValidateQueryRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RulesValidateQueryRequestData.js.map
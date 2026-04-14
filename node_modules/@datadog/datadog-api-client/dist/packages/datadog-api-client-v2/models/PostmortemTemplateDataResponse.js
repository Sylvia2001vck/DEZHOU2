"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostmortemTemplateDataResponse = void 0;
class PostmortemTemplateDataResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PostmortemTemplateDataResponse.attributeTypeMap;
    }
}
exports.PostmortemTemplateDataResponse = PostmortemTemplateDataResponse;
/**
 * @ignore
 */
PostmortemTemplateDataResponse.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "PostmortemTemplateAttributesResponse",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "PostmortemTemplateType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PostmortemTemplateDataResponse.js.map
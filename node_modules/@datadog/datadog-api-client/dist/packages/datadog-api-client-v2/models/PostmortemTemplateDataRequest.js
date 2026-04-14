"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostmortemTemplateDataRequest = void 0;
class PostmortemTemplateDataRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PostmortemTemplateDataRequest.attributeTypeMap;
    }
}
exports.PostmortemTemplateDataRequest = PostmortemTemplateDataRequest;
/**
 * @ignore
 */
PostmortemTemplateDataRequest.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "PostmortemTemplateAttributesRequest",
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
//# sourceMappingURL=PostmortemTemplateDataRequest.js.map
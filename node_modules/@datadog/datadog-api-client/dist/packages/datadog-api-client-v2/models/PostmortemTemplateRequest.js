"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostmortemTemplateRequest = void 0;
class PostmortemTemplateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PostmortemTemplateRequest.attributeTypeMap;
    }
}
exports.PostmortemTemplateRequest = PostmortemTemplateRequest;
/**
 * @ignore
 */
PostmortemTemplateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "PostmortemTemplateDataRequest",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PostmortemTemplateRequest.js.map
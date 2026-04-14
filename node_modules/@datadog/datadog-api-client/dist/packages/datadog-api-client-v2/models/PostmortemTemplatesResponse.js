"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostmortemTemplatesResponse = void 0;
class PostmortemTemplatesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PostmortemTemplatesResponse.attributeTypeMap;
    }
}
exports.PostmortemTemplatesResponse = PostmortemTemplatesResponse;
/**
 * @ignore
 */
PostmortemTemplatesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<PostmortemTemplateDataResponse>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PostmortemTemplatesResponse.js.map
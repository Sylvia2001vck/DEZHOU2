"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostmortemTemplateResponse = void 0;
class PostmortemTemplateResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PostmortemTemplateResponse.attributeTypeMap;
    }
}
exports.PostmortemTemplateResponse = PostmortemTemplateResponse;
/**
 * @ignore
 */
PostmortemTemplateResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "PostmortemTemplateDataResponse",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PostmortemTemplateResponse.js.map
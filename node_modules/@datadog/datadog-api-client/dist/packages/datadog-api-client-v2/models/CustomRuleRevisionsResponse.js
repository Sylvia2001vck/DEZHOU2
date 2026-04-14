"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomRuleRevisionsResponse = void 0;
class CustomRuleRevisionsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomRuleRevisionsResponse.attributeTypeMap;
    }
}
exports.CustomRuleRevisionsResponse = CustomRuleRevisionsResponse;
/**
 * @ignore
 */
CustomRuleRevisionsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<CustomRuleRevision>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomRuleRevisionsResponse.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomRuleRevisionResponse = void 0;
class CustomRuleRevisionResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomRuleRevisionResponse.attributeTypeMap;
    }
}
exports.CustomRuleRevisionResponse = CustomRuleRevisionResponse;
/**
 * @ignore
 */
CustomRuleRevisionResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "CustomRuleRevision",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomRuleRevisionResponse.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomRuleRevisionRequestData = void 0;
class CustomRuleRevisionRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomRuleRevisionRequestData.attributeTypeMap;
    }
}
exports.CustomRuleRevisionRequestData = CustomRuleRevisionRequestData;
/**
 * @ignore
 */
CustomRuleRevisionRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CustomRuleRevisionInputAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "CustomRuleRevisionDataType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomRuleRevisionRequestData.js.map
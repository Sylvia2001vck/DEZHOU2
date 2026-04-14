"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomRuleRequestData = void 0;
class CustomRuleRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomRuleRequestData.attributeTypeMap;
    }
}
exports.CustomRuleRequestData = CustomRuleRequestData;
/**
 * @ignore
 */
CustomRuleRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CustomRuleRequestDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "CustomRuleDataType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomRuleRequestData.js.map
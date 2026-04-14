"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomRuleResponseData = void 0;
class CustomRuleResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomRuleResponseData.attributeTypeMap;
    }
}
exports.CustomRuleResponseData = CustomRuleResponseData;
/**
 * @ignore
 */
CustomRuleResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CustomRule",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CustomRuleDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomRuleResponseData.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomRulesetRequestData = void 0;
class CustomRulesetRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomRulesetRequestData.attributeTypeMap;
    }
}
exports.CustomRulesetRequestData = CustomRulesetRequestData;
/**
 * @ignore
 */
CustomRulesetRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CustomRulesetRequestDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "CustomRulesetDataType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomRulesetRequestData.js.map
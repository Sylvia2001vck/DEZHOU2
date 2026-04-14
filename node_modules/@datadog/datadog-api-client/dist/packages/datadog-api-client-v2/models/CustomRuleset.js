"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomRuleset = void 0;
class CustomRuleset {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomRuleset.attributeTypeMap;
    }
}
exports.CustomRuleset = CustomRuleset;
/**
 * @ignore
 */
CustomRuleset.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CustomRulesetAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CustomRulesetDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomRuleset.js.map
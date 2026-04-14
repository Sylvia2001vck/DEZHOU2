"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomRulesetAttributes = void 0;
class CustomRulesetAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomRulesetAttributes.attributeTypeMap;
    }
}
exports.CustomRulesetAttributes = CustomRulesetAttributes;
/**
 * @ignore
 */
CustomRulesetAttributes.attributeTypeMap = {
    createdAt: {
        baseName: "created_at",
        type: "Date",
        required: true,
        format: "date-time",
    },
    createdBy: {
        baseName: "created_by",
        type: "string",
        required: true,
    },
    description: {
        baseName: "description",
        type: "string",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    rules: {
        baseName: "rules",
        type: "Array<CustomRule>",
        required: true,
    },
    shortDescription: {
        baseName: "short_description",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomRulesetAttributes.js.map
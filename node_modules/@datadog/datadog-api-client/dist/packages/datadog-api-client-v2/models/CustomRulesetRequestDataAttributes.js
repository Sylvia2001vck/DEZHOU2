"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomRulesetRequestDataAttributes = void 0;
class CustomRulesetRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomRulesetRequestDataAttributes.attributeTypeMap;
    }
}
exports.CustomRulesetRequestDataAttributes = CustomRulesetRequestDataAttributes;
/**
 * @ignore
 */
CustomRulesetRequestDataAttributes.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    rules: {
        baseName: "rules",
        type: "Array<CustomRule>",
    },
    shortDescription: {
        baseName: "short_description",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomRulesetRequestDataAttributes.js.map
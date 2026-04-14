"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecretRuleDataAttributes = void 0;
class SecretRuleDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecretRuleDataAttributes.attributeTypeMap;
    }
}
exports.SecretRuleDataAttributes = SecretRuleDataAttributes;
/**
 * @ignore
 */
SecretRuleDataAttributes.attributeTypeMap = {
    defaultIncludedKeywords: {
        baseName: "default_included_keywords",
        type: "Array<string>",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    license: {
        baseName: "license",
        type: "string",
    },
    matchValidation: {
        baseName: "match_validation",
        type: "SecretRuleDataAttributesMatchValidation",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    pattern: {
        baseName: "pattern",
        type: "string",
    },
    priority: {
        baseName: "priority",
        type: "string",
    },
    sdsId: {
        baseName: "sds_id",
        type: "string",
    },
    validators: {
        baseName: "validators",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecretRuleDataAttributes.js.map
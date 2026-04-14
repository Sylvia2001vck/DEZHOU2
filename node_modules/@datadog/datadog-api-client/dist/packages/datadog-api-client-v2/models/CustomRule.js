"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomRule = void 0;
class CustomRule {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomRule.attributeTypeMap;
    }
}
exports.CustomRule = CustomRule;
/**
 * @ignore
 */
CustomRule.attributeTypeMap = {
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
    lastRevision: {
        baseName: "last_revision",
        type: "CustomRuleRevision",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomRule.js.map
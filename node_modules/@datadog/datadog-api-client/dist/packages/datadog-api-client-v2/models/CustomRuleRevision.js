"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomRuleRevision = void 0;
class CustomRuleRevision {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomRuleRevision.attributeTypeMap;
    }
}
exports.CustomRuleRevision = CustomRuleRevision;
/**
 * @ignore
 */
CustomRuleRevision.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "CustomRuleRevisionAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "CustomRuleRevisionDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomRuleRevision.js.map
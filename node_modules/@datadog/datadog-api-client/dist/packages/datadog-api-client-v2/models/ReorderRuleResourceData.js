"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReorderRuleResourceData = void 0;
/**
 * The definition of `ReorderRuleResourceData` object.
 */
class ReorderRuleResourceData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ReorderRuleResourceData.attributeTypeMap;
    }
}
exports.ReorderRuleResourceData = ReorderRuleResourceData;
/**
 * @ignore
 */
ReorderRuleResourceData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ReorderRuleResourceDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ReorderRuleResourceData.js.map
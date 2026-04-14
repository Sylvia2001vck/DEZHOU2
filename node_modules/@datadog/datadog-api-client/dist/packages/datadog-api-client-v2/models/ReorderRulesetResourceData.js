"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReorderRulesetResourceData = void 0;
/**
 * The definition of `ReorderRulesetResourceData` object.
 */
class ReorderRulesetResourceData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ReorderRulesetResourceData.attributeTypeMap;
    }
}
exports.ReorderRulesetResourceData = ReorderRulesetResourceData;
/**
 * @ignore
 */
ReorderRulesetResourceData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ReorderRulesetResourceDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ReorderRulesetResourceData.js.map
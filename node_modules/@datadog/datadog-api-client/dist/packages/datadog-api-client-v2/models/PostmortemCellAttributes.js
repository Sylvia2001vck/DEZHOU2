"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostmortemCellAttributes = void 0;
/**
 * Attributes of a postmortem cell
 */
class PostmortemCellAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PostmortemCellAttributes.attributeTypeMap;
    }
}
exports.PostmortemCellAttributes = PostmortemCellAttributes;
/**
 * @ignore
 */
PostmortemCellAttributes.attributeTypeMap = {
    definition: {
        baseName: "definition",
        type: "PostmortemCellDefinition",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PostmortemCellAttributes.js.map
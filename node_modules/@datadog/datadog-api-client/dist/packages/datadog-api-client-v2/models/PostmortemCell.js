"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostmortemCell = void 0;
/**
 * A cell in the postmortem
 */
class PostmortemCell {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PostmortemCell.attributeTypeMap;
    }
}
exports.PostmortemCell = PostmortemCell;
/**
 * @ignore
 */
PostmortemCell.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "PostmortemCellAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "PostmortemCellType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PostmortemCell.js.map
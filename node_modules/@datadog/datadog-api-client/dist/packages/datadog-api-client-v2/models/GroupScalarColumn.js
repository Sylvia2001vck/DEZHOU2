"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupScalarColumn = void 0;
/**
 * A column containing the tag keys and values in a group.
 */
class GroupScalarColumn {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GroupScalarColumn.attributeTypeMap;
    }
}
exports.GroupScalarColumn = GroupScalarColumn;
/**
 * @ignore
 */
GroupScalarColumn.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ScalarColumnTypeGroup",
    },
    values: {
        baseName: "values",
        type: "Array<Array<string>>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GroupScalarColumn.js.map
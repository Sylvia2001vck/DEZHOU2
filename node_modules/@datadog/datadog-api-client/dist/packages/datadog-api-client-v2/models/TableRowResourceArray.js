"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableRowResourceArray = void 0;
/**
 * List of rows from a reference table query.
 */
class TableRowResourceArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TableRowResourceArray.attributeTypeMap;
    }
}
exports.TableRowResourceArray = TableRowResourceArray;
/**
 * @ignore
 */
TableRowResourceArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<TableRowResourceData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TableRowResourceArray.js.map
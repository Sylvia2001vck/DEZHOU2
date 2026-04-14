"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableRowResourceData = void 0;
/**
 * The data object containing the row column names and values.
 */
class TableRowResourceData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TableRowResourceData.attributeTypeMap;
    }
}
exports.TableRowResourceData = TableRowResourceData;
/**
 * @ignore
 */
TableRowResourceData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "TableRowResourceDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "TableRowResourceDataType",
        required: true,
    },
};
//# sourceMappingURL=TableRowResourceData.js.map
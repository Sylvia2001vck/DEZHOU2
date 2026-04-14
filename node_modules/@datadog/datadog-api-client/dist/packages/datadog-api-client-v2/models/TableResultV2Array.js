"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableResultV2Array = void 0;
/**
 * List of reference tables.
 */
class TableResultV2Array {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TableResultV2Array.attributeTypeMap;
    }
}
exports.TableResultV2Array = TableResultV2Array;
/**
 * @ignore
 */
TableResultV2Array.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<TableResultV2Data>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TableResultV2Array.js.map
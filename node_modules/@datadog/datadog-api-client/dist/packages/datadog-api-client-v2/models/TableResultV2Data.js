"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableResultV2Data = void 0;
/**
 * The data object containing the reference table configuration and state.
 */
class TableResultV2Data {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TableResultV2Data.attributeTypeMap;
    }
}
exports.TableResultV2Data = TableResultV2Data;
/**
 * @ignore
 */
TableResultV2Data.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "TableResultV2DataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "TableResultV2DataType",
        required: true,
    },
};
//# sourceMappingURL=TableResultV2Data.js.map
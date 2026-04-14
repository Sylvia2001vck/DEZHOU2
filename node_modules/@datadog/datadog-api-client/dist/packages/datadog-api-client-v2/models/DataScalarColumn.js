"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataScalarColumn = void 0;
/**
 * A column containing the numerical results for a formula or query.
 */
class DataScalarColumn {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DataScalarColumn.attributeTypeMap;
    }
}
exports.DataScalarColumn = DataScalarColumn;
/**
 * @ignore
 */
DataScalarColumn.attributeTypeMap = {
    meta: {
        baseName: "meta",
        type: "ScalarMeta",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ScalarColumnTypeNumber",
    },
    values: {
        baseName: "values",
        type: "Array<number>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DataScalarColumn.js.map
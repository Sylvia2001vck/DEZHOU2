"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableResultV2 = void 0;
/**
 * A reference table resource containing its full configuration and state.
 */
class TableResultV2 {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TableResultV2.attributeTypeMap;
    }
}
exports.TableResultV2 = TableResultV2;
/**
 * @ignore
 */
TableResultV2.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "TableResultV2Data",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TableResultV2.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasetResponseMulti = void 0;
/**
 * Response containing a list of datasets.
 */
class DatasetResponseMulti {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DatasetResponseMulti.attributeTypeMap;
    }
}
exports.DatasetResponseMulti = DatasetResponseMulti;
/**
 * @ignore
 */
DatasetResponseMulti.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<DatasetResponse>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DatasetResponseMulti.js.map
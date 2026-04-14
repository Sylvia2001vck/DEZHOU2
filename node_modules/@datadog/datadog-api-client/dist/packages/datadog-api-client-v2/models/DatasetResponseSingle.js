"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasetResponseSingle = void 0;
/**
 * Response containing a single dataset object.
 */
class DatasetResponseSingle {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DatasetResponseSingle.attributeTypeMap;
    }
}
exports.DatasetResponseSingle = DatasetResponseSingle;
/**
 * @ignore
 */
DatasetResponseSingle.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DatasetResponse",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DatasetResponseSingle.js.map
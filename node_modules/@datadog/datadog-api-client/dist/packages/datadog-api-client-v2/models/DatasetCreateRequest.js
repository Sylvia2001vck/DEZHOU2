"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasetCreateRequest = void 0;
/**
 * Create request for a dataset.
 */
class DatasetCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DatasetCreateRequest.attributeTypeMap;
    }
}
exports.DatasetCreateRequest = DatasetCreateRequest;
/**
 * @ignore
 */
DatasetCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DatasetRequest",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DatasetCreateRequest.js.map
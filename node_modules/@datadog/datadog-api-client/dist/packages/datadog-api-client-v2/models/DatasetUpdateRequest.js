"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasetUpdateRequest = void 0;
/**
 * Edit request for a dataset.
 */
class DatasetUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DatasetUpdateRequest.attributeTypeMap;
    }
}
exports.DatasetUpdateRequest = DatasetUpdateRequest;
/**
 * @ignore
 */
DatasetUpdateRequest.attributeTypeMap = {
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
//# sourceMappingURL=DatasetUpdateRequest.js.map
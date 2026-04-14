"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasetResponse = void 0;
/**
 * **Datasets Object Constraints**
 * - **Tag Limit per Dataset**:
 *   - Each restricted dataset supports a maximum of 10 key:value pairs per product.
 *
 * - **Tag Key Rules per Telemetry Type**:
 *   - Only one tag key or attribute may be used to define access within a single telemetry type.
 *   - The same or different tag key may be used across different telemetry types.
 *
 * - **Tag Value Uniqueness**:
 *   - Tag values must be unique within a single dataset.
 *   - A tag value used in one dataset cannot be reused in another dataset of the same telemetry type.
 */
class DatasetResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DatasetResponse.attributeTypeMap;
    }
}
exports.DatasetResponse = DatasetResponse;
/**
 * @ignore
 */
DatasetResponse.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "DatasetAttributesResponse",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "DatasetType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DatasetResponse.js.map
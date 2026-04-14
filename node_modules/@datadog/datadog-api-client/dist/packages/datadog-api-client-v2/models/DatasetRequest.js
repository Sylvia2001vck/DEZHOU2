"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasetRequest = void 0;
/**
 * **Datasets Object Constraints**
 * - **Tag limit per dataset**:
 *   - Each restricted dataset supports a maximum of 10 key:value pairs per product.
 *
 * - **Tag key rules per telemetry type**:
 *   - Only one tag key or attribute may be used to define access within a single telemetry type.
 *   - The same or different tag key may be used across different telemetry types.
 *
 * - **Tag value uniqueness**:
 *   - Tag values must be unique within a single dataset.
 *   - A tag value used in one dataset cannot be reused in another dataset of the same telemetry type.
 */
class DatasetRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DatasetRequest.attributeTypeMap;
    }
}
exports.DatasetRequest = DatasetRequest;
/**
 * @ignore
 */
DatasetRequest.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "DatasetAttributesRequest",
        required: true,
    },
    type: {
        baseName: "type",
        type: "DatasetType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DatasetRequest.js.map
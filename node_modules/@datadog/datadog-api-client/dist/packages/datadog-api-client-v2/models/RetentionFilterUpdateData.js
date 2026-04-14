"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetentionFilterUpdateData = void 0;
/**
 * The body of the retention filter to be updated.
 */
class RetentionFilterUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RetentionFilterUpdateData.attributeTypeMap;
    }
}
exports.RetentionFilterUpdateData = RetentionFilterUpdateData;
/**
 * @ignore
 */
RetentionFilterUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RetentionFilterUpdateAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ApmRetentionFilterType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RetentionFilterUpdateData.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetentionFilterUpdateRequest = void 0;
/**
 * The body of the retention filter to be updated.
 */
class RetentionFilterUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RetentionFilterUpdateRequest.attributeTypeMap;
    }
}
exports.RetentionFilterUpdateRequest = RetentionFilterUpdateRequest;
/**
 * @ignore
 */
RetentionFilterUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RetentionFilterUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RetentionFilterUpdateRequest.js.map
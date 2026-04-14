"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetentionFilterCreateRequest = void 0;
/**
 * The body of the retention filter to be created.
 */
class RetentionFilterCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RetentionFilterCreateRequest.attributeTypeMap;
    }
}
exports.RetentionFilterCreateRequest = RetentionFilterCreateRequest;
/**
 * @ignore
 */
RetentionFilterCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RetentionFilterCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RetentionFilterCreateRequest.js.map
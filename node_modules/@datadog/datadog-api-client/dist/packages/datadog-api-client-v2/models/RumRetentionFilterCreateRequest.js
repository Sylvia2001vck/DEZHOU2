"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumRetentionFilterCreateRequest = void 0;
/**
 * The RUM retention filter body to create.
 */
class RumRetentionFilterCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumRetentionFilterCreateRequest.attributeTypeMap;
    }
}
exports.RumRetentionFilterCreateRequest = RumRetentionFilterCreateRequest;
/**
 * @ignore
 */
RumRetentionFilterCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RumRetentionFilterCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RumRetentionFilterCreateRequest.js.map
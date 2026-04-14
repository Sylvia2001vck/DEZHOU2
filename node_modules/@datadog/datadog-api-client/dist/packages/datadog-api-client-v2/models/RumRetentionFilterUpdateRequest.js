"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumRetentionFilterUpdateRequest = void 0;
/**
 * The RUM retention filter body to update.
 */
class RumRetentionFilterUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumRetentionFilterUpdateRequest.attributeTypeMap;
    }
}
exports.RumRetentionFilterUpdateRequest = RumRetentionFilterUpdateRequest;
/**
 * @ignore
 */
RumRetentionFilterUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RumRetentionFilterUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RumRetentionFilterUpdateRequest.js.map
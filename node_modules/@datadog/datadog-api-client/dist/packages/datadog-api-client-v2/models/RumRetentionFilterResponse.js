"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumRetentionFilterResponse = void 0;
/**
 * The RUM retention filter object.
 */
class RumRetentionFilterResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumRetentionFilterResponse.attributeTypeMap;
    }
}
exports.RumRetentionFilterResponse = RumRetentionFilterResponse;
/**
 * @ignore
 */
RumRetentionFilterResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RumRetentionFilterData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RumRetentionFilterResponse.js.map
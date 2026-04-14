"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUMBucketResponse = void 0;
/**
 * Bucket values.
 */
class RUMBucketResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RUMBucketResponse.attributeTypeMap;
    }
}
exports.RUMBucketResponse = RUMBucketResponse;
/**
 * @ignore
 */
RUMBucketResponse.attributeTypeMap = {
    by: {
        baseName: "by",
        type: "{ [key: string]: string; }",
    },
    computes: {
        baseName: "computes",
        type: "{ [key: string]: RUMAggregateBucketValue; }",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RUMBucketResponse.js.map
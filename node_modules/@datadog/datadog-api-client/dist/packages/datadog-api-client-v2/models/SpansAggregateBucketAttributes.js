"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansAggregateBucketAttributes = void 0;
/**
 * A bucket values.
 */
class SpansAggregateBucketAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansAggregateBucketAttributes.attributeTypeMap;
    }
}
exports.SpansAggregateBucketAttributes = SpansAggregateBucketAttributes;
/**
 * @ignore
 */
SpansAggregateBucketAttributes.attributeTypeMap = {
    by: {
        baseName: "by",
        type: "{ [key: string]: any; }",
    },
    compute: {
        baseName: "compute",
        type: "any",
    },
    computes: {
        baseName: "computes",
        type: "{ [key: string]: SpansAggregateBucketValue; }",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SpansAggregateBucketAttributes.js.map
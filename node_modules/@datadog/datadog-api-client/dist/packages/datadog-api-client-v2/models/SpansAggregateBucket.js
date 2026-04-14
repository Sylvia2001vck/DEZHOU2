"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansAggregateBucket = void 0;
/**
 * Spans aggregate.
 */
class SpansAggregateBucket {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansAggregateBucket.attributeTypeMap;
    }
}
exports.SpansAggregateBucket = SpansAggregateBucket;
/**
 * @ignore
 */
SpansAggregateBucket.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SpansAggregateBucketAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SpansAggregateBucketType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SpansAggregateBucket.js.map
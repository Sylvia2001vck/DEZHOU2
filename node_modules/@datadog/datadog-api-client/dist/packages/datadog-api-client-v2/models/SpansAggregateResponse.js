"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansAggregateResponse = void 0;
/**
 * The response object for the spans aggregate API endpoint.
 */
class SpansAggregateResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansAggregateResponse.attributeTypeMap;
    }
}
exports.SpansAggregateResponse = SpansAggregateResponse;
/**
 * @ignore
 */
SpansAggregateResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<SpansAggregateBucket>",
    },
    meta: {
        baseName: "meta",
        type: "SpansAggregateResponseMetadata",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SpansAggregateResponse.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansAggregateRequestAttributes = void 0;
/**
 * The object containing all the query parameters.
 */
class SpansAggregateRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansAggregateRequestAttributes.attributeTypeMap;
    }
}
exports.SpansAggregateRequestAttributes = SpansAggregateRequestAttributes;
/**
 * @ignore
 */
SpansAggregateRequestAttributes.attributeTypeMap = {
    compute: {
        baseName: "compute",
        type: "Array<SpansCompute>",
    },
    filter: {
        baseName: "filter",
        type: "SpansQueryFilter",
    },
    groupBy: {
        baseName: "group_by",
        type: "Array<SpansGroupBy>",
    },
    options: {
        baseName: "options",
        type: "SpansQueryOptions",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SpansAggregateRequestAttributes.js.map
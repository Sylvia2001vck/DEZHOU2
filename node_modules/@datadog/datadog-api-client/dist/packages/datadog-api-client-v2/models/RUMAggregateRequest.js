"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RUMAggregateRequest = void 0;
/**
 * The object sent with the request to retrieve aggregation buckets of RUM events from your organization.
 */
class RUMAggregateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RUMAggregateRequest.attributeTypeMap;
    }
}
exports.RUMAggregateRequest = RUMAggregateRequest;
/**
 * @ignore
 */
RUMAggregateRequest.attributeTypeMap = {
    compute: {
        baseName: "compute",
        type: "Array<RUMCompute>",
    },
    filter: {
        baseName: "filter",
        type: "RUMQueryFilter",
    },
    groupBy: {
        baseName: "group_by",
        type: "Array<RUMGroupBy>",
    },
    options: {
        baseName: "options",
        type: "RUMQueryOptions",
    },
    page: {
        baseName: "page",
        type: "RUMQueryPageOptions",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RUMAggregateRequest.js.map
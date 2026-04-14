"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsAggregateRequest = void 0;
/**
 * The object sent with the request to retrieve a list of logs from your organization.
 */
class LogsAggregateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsAggregateRequest.attributeTypeMap;
    }
}
exports.LogsAggregateRequest = LogsAggregateRequest;
/**
 * @ignore
 */
LogsAggregateRequest.attributeTypeMap = {
    compute: {
        baseName: "compute",
        type: "Array<LogsCompute>",
    },
    filter: {
        baseName: "filter",
        type: "LogsQueryFilter",
    },
    groupBy: {
        baseName: "group_by",
        type: "Array<LogsGroupBy>",
    },
    options: {
        baseName: "options",
        type: "LogsQueryOptions",
    },
    page: {
        baseName: "page",
        type: "LogsAggregateRequestPage",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsAggregateRequest.js.map
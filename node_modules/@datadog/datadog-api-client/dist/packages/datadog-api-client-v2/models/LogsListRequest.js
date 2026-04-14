"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsListRequest = void 0;
/**
 * The request for a logs list.
 */
class LogsListRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsListRequest.attributeTypeMap;
    }
}
exports.LogsListRequest = LogsListRequest;
/**
 * @ignore
 */
LogsListRequest.attributeTypeMap = {
    filter: {
        baseName: "filter",
        type: "LogsQueryFilter",
    },
    options: {
        baseName: "options",
        type: "LogsQueryOptions",
    },
    page: {
        baseName: "page",
        type: "LogsListRequestPage",
    },
    sort: {
        baseName: "sort",
        type: "LogsSort",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsListRequest.js.map
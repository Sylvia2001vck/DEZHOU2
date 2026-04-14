"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsAggregateResponseData = void 0;
/**
 * The query results
 */
class LogsAggregateResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsAggregateResponseData.attributeTypeMap;
    }
}
exports.LogsAggregateResponseData = LogsAggregateResponseData;
/**
 * @ignore
 */
LogsAggregateResponseData.attributeTypeMap = {
    buckets: {
        baseName: "buckets",
        type: "Array<LogsAggregateBucket>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsAggregateResponseData.js.map
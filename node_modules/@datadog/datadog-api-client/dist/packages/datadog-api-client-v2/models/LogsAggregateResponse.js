"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsAggregateResponse = void 0;
/**
 * The response object for the logs aggregate API endpoint
 */
class LogsAggregateResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsAggregateResponse.attributeTypeMap;
    }
}
exports.LogsAggregateResponse = LogsAggregateResponse;
/**
 * @ignore
 */
LogsAggregateResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "LogsAggregateResponseData",
    },
    meta: {
        baseName: "meta",
        type: "LogsResponseMetadata",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsAggregateResponse.js.map
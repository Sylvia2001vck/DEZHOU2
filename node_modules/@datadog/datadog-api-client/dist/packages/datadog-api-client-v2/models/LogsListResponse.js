"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsListResponse = void 0;
/**
 * Response object with all logs matching the request and pagination information.
 */
class LogsListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsListResponse.attributeTypeMap;
    }
}
exports.LogsListResponse = LogsListResponse;
/**
 * @ignore
 */
LogsListResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<Log>",
    },
    links: {
        baseName: "links",
        type: "LogsListResponseLinks",
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
//# sourceMappingURL=LogsListResponse.js.map
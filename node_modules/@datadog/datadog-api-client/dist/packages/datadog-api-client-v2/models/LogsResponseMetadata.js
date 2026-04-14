"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsResponseMetadata = void 0;
/**
 * The metadata associated with a request
 */
class LogsResponseMetadata {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsResponseMetadata.attributeTypeMap;
    }
}
exports.LogsResponseMetadata = LogsResponseMetadata;
/**
 * @ignore
 */
LogsResponseMetadata.attributeTypeMap = {
    elapsed: {
        baseName: "elapsed",
        type: "number",
        format: "int64",
    },
    page: {
        baseName: "page",
        type: "LogsResponseMetadataPage",
    },
    requestId: {
        baseName: "request_id",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "LogsAggregateResponseStatus",
    },
    warnings: {
        baseName: "warnings",
        type: "Array<LogsWarning>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsResponseMetadata.js.map
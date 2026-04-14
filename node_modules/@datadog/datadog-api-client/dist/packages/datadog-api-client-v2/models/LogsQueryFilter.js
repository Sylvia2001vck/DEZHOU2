"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsQueryFilter = void 0;
/**
 * The search and filter query settings
 */
class LogsQueryFilter {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsQueryFilter.attributeTypeMap;
    }
}
exports.LogsQueryFilter = LogsQueryFilter;
/**
 * @ignore
 */
LogsQueryFilter.attributeTypeMap = {
    from: {
        baseName: "from",
        type: "string",
    },
    indexes: {
        baseName: "indexes",
        type: "Array<string>",
    },
    query: {
        baseName: "query",
        type: "string",
    },
    storageTier: {
        baseName: "storage_tier",
        type: "LogsStorageTier",
    },
    to: {
        baseName: "to",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsQueryFilter.js.map
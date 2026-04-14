"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsArchiveCreateRequestAttributes = void 0;
/**
 * The attributes associated with the archive.
 */
class LogsArchiveCreateRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsArchiveCreateRequestAttributes.attributeTypeMap;
    }
}
exports.LogsArchiveCreateRequestAttributes = LogsArchiveCreateRequestAttributes;
/**
 * @ignore
 */
LogsArchiveCreateRequestAttributes.attributeTypeMap = {
    destination: {
        baseName: "destination",
        type: "LogsArchiveCreateRequestDestination",
        required: true,
    },
    includeTags: {
        baseName: "include_tags",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    query: {
        baseName: "query",
        type: "string",
        required: true,
    },
    rehydrationMaxScanSizeInGb: {
        baseName: "rehydration_max_scan_size_in_gb",
        type: "number",
        format: "int64",
    },
    rehydrationTags: {
        baseName: "rehydration_tags",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsArchiveCreateRequestAttributes.js.map
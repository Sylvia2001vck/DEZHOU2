"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsArchiveAttributes = void 0;
/**
 * The attributes associated with the archive.
 */
class LogsArchiveAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsArchiveAttributes.attributeTypeMap;
    }
}
exports.LogsArchiveAttributes = LogsArchiveAttributes;
/**
 * @ignore
 */
LogsArchiveAttributes.attributeTypeMap = {
    destination: {
        baseName: "destination",
        type: "LogsArchiveDestination",
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
    state: {
        baseName: "state",
        type: "LogsArchiveState",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsArchiveAttributes.js.map
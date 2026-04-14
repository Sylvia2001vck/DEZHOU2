"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsArchiveCreateRequest = void 0;
/**
 * The logs archive.
 */
class LogsArchiveCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsArchiveCreateRequest.attributeTypeMap;
    }
}
exports.LogsArchiveCreateRequest = LogsArchiveCreateRequest;
/**
 * @ignore
 */
LogsArchiveCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "LogsArchiveCreateRequestDefinition",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsArchiveCreateRequest.js.map
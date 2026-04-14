"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsArchive = void 0;
/**
 * The logs archive.
 */
class LogsArchive {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsArchive.attributeTypeMap;
    }
}
exports.LogsArchive = LogsArchive;
/**
 * @ignore
 */
LogsArchive.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "LogsArchiveDefinition",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsArchive.js.map
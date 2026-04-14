"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsArchives = void 0;
/**
 * The available archives.
 */
class LogsArchives {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsArchives.attributeTypeMap;
    }
}
exports.LogsArchives = LogsArchives;
/**
 * @ignore
 */
LogsArchives.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<LogsArchiveDefinition>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsArchives.js.map
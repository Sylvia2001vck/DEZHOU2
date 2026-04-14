"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsArchiveDefinition = void 0;
/**
 * The definition of an archive.
 */
class LogsArchiveDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsArchiveDefinition.attributeTypeMap;
    }
}
exports.LogsArchiveDefinition = LogsArchiveDefinition;
/**
 * @ignore
 */
LogsArchiveDefinition.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "LogsArchiveAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsArchiveDefinition.js.map
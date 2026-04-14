"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsArchiveCreateRequestDefinition = void 0;
/**
 * The definition of an archive.
 */
class LogsArchiveCreateRequestDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsArchiveCreateRequestDefinition.attributeTypeMap;
    }
}
exports.LogsArchiveCreateRequestDefinition = LogsArchiveCreateRequestDefinition;
/**
 * @ignore
 */
LogsArchiveCreateRequestDefinition.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "LogsArchiveCreateRequestAttributes",
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
//# sourceMappingURL=LogsArchiveCreateRequestDefinition.js.map
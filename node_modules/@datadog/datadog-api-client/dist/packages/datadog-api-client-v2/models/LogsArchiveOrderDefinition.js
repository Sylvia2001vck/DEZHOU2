"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsArchiveOrderDefinition = void 0;
/**
 * The definition of an archive order.
 */
class LogsArchiveOrderDefinition {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsArchiveOrderDefinition.attributeTypeMap;
    }
}
exports.LogsArchiveOrderDefinition = LogsArchiveOrderDefinition;
/**
 * @ignore
 */
LogsArchiveOrderDefinition.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "LogsArchiveOrderAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "LogsArchiveOrderDefinitionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsArchiveOrderDefinition.js.map
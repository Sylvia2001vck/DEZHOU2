"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogsArchiveOrder = void 0;
/**
 * A ordered list of archive IDs.
 */
class LogsArchiveOrder {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LogsArchiveOrder.attributeTypeMap;
    }
}
exports.LogsArchiveOrder = LogsArchiveOrder;
/**
 * @ignore
 */
LogsArchiveOrder.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "LogsArchiveOrderDefinition",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LogsArchiveOrder.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DowntimeMonitorIncludedItem = void 0;
/**
 * Information about the monitor identified by the downtime.
 */
class DowntimeMonitorIncludedItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DowntimeMonitorIncludedItem.attributeTypeMap;
    }
}
exports.DowntimeMonitorIncludedItem = DowntimeMonitorIncludedItem;
/**
 * @ignore
 */
DowntimeMonitorIncludedItem.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "DowntimeMonitorIncludedAttributes",
    },
    id: {
        baseName: "id",
        type: "number",
        format: "int64",
    },
    type: {
        baseName: "type",
        type: "DowntimeIncludedMonitorType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DowntimeMonitorIncludedItem.js.map
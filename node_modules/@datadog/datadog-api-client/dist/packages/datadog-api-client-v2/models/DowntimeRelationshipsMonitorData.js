"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DowntimeRelationshipsMonitorData = void 0;
/**
 * Data for the monitor.
 */
class DowntimeRelationshipsMonitorData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DowntimeRelationshipsMonitorData.attributeTypeMap;
    }
}
exports.DowntimeRelationshipsMonitorData = DowntimeRelationshipsMonitorData;
/**
 * @ignore
 */
DowntimeRelationshipsMonitorData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=DowntimeRelationshipsMonitorData.js.map
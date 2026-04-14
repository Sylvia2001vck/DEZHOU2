"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DowntimeRelationshipsMonitor = void 0;
/**
 * The monitor identified by the downtime.
 */
class DowntimeRelationshipsMonitor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DowntimeRelationshipsMonitor.attributeTypeMap;
    }
}
exports.DowntimeRelationshipsMonitor = DowntimeRelationshipsMonitor;
/**
 * @ignore
 */
DowntimeRelationshipsMonitor.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "DowntimeRelationshipsMonitorData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DowntimeRelationshipsMonitor.js.map
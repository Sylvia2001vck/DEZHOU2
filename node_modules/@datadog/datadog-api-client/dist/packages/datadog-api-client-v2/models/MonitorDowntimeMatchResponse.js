"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorDowntimeMatchResponse = void 0;
/**
 * Response for retrieving all downtime matches for a monitor.
 */
class MonitorDowntimeMatchResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorDowntimeMatchResponse.attributeTypeMap;
    }
}
exports.MonitorDowntimeMatchResponse = MonitorDowntimeMatchResponse;
/**
 * @ignore
 */
MonitorDowntimeMatchResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<MonitorDowntimeMatchResponseData>",
    },
    meta: {
        baseName: "meta",
        type: "DowntimeMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorDowntimeMatchResponse.js.map
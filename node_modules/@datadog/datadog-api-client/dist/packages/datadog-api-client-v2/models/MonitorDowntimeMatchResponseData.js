"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorDowntimeMatchResponseData = void 0;
/**
 * A downtime match.
 */
class MonitorDowntimeMatchResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorDowntimeMatchResponseData.attributeTypeMap;
    }
}
exports.MonitorDowntimeMatchResponseData = MonitorDowntimeMatchResponseData;
/**
 * @ignore
 */
MonitorDowntimeMatchResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MonitorDowntimeMatchResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "MonitorDowntimeMatchResourceType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorDowntimeMatchResponseData.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringContentPackStateData = void 0;
/**
 * Content pack state data.
 */
class SecurityMonitoringContentPackStateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringContentPackStateData.attributeTypeMap;
    }
}
exports.SecurityMonitoringContentPackStateData = SecurityMonitoringContentPackStateData;
/**
 * @ignore
 */
SecurityMonitoringContentPackStateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SecurityMonitoringContentPackStateAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "SecurityMonitoringContentPackStateType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringContentPackStateData.js.map
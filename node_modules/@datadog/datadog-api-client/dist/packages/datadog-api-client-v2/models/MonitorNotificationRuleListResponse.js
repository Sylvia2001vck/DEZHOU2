"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorNotificationRuleListResponse = void 0;
/**
 * Response for retrieving all monitor notification rules.
 */
class MonitorNotificationRuleListResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorNotificationRuleListResponse.attributeTypeMap;
    }
}
exports.MonitorNotificationRuleListResponse = MonitorNotificationRuleListResponse;
/**
 * @ignore
 */
MonitorNotificationRuleListResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<MonitorNotificationRuleData>",
    },
    included: {
        baseName: "included",
        type: "Array<MonitorNotificationRuleResponseIncludedItem>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorNotificationRuleListResponse.js.map
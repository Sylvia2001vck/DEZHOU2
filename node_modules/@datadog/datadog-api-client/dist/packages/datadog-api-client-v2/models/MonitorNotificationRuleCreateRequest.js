"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorNotificationRuleCreateRequest = void 0;
/**
 * Request for creating a monitor notification rule.
 */
class MonitorNotificationRuleCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorNotificationRuleCreateRequest.attributeTypeMap;
    }
}
exports.MonitorNotificationRuleCreateRequest = MonitorNotificationRuleCreateRequest;
/**
 * @ignore
 */
MonitorNotificationRuleCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MonitorNotificationRuleCreateRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorNotificationRuleCreateRequest.js.map
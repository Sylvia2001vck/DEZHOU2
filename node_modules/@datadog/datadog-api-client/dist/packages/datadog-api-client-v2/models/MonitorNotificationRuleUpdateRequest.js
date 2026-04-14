"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorNotificationRuleUpdateRequest = void 0;
/**
 * Request for updating a monitor notification rule.
 */
class MonitorNotificationRuleUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorNotificationRuleUpdateRequest.attributeTypeMap;
    }
}
exports.MonitorNotificationRuleUpdateRequest = MonitorNotificationRuleUpdateRequest;
/**
 * @ignore
 */
MonitorNotificationRuleUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MonitorNotificationRuleUpdateRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorNotificationRuleUpdateRequest.js.map
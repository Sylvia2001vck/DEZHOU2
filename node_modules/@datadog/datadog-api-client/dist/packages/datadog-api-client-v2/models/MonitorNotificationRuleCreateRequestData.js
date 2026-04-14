"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorNotificationRuleCreateRequestData = void 0;
/**
 * Object to create a monitor notification rule.
 */
class MonitorNotificationRuleCreateRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorNotificationRuleCreateRequestData.attributeTypeMap;
    }
}
exports.MonitorNotificationRuleCreateRequestData = MonitorNotificationRuleCreateRequestData;
/**
 * @ignore
 */
MonitorNotificationRuleCreateRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MonitorNotificationRuleAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "MonitorNotificationRuleResourceType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorNotificationRuleCreateRequestData.js.map
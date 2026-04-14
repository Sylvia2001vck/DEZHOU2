"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorNotificationRuleUpdateRequestData = void 0;
/**
 * Object to update a monitor notification rule.
 */
class MonitorNotificationRuleUpdateRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorNotificationRuleUpdateRequestData.attributeTypeMap;
    }
}
exports.MonitorNotificationRuleUpdateRequestData = MonitorNotificationRuleUpdateRequestData;
/**
 * @ignore
 */
MonitorNotificationRuleUpdateRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MonitorNotificationRuleAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=MonitorNotificationRuleUpdateRequestData.js.map
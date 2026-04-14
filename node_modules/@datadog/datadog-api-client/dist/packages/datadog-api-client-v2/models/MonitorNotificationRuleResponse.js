"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorNotificationRuleResponse = void 0;
/**
 * A monitor notification rule.
 */
class MonitorNotificationRuleResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorNotificationRuleResponse.attributeTypeMap;
    }
}
exports.MonitorNotificationRuleResponse = MonitorNotificationRuleResponse;
/**
 * @ignore
 */
MonitorNotificationRuleResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MonitorNotificationRuleData",
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
//# sourceMappingURL=MonitorNotificationRuleResponse.js.map
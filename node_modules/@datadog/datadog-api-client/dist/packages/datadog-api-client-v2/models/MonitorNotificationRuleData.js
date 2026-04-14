"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorNotificationRuleData = void 0;
/**
 * Monitor notification rule data.
 */
class MonitorNotificationRuleData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorNotificationRuleData.attributeTypeMap;
    }
}
exports.MonitorNotificationRuleData = MonitorNotificationRuleData;
/**
 * @ignore
 */
MonitorNotificationRuleData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MonitorNotificationRuleResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "MonitorNotificationRuleRelationships",
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
//# sourceMappingURL=MonitorNotificationRuleData.js.map
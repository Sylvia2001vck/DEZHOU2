"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorNotificationRuleRelationships = void 0;
/**
 * All relationships associated with monitor notification rule.
 */
class MonitorNotificationRuleRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorNotificationRuleRelationships.attributeTypeMap;
    }
}
exports.MonitorNotificationRuleRelationships = MonitorNotificationRuleRelationships;
/**
 * @ignore
 */
MonitorNotificationRuleRelationships.attributeTypeMap = {
    createdBy: {
        baseName: "created_by",
        type: "MonitorNotificationRuleRelationshipsCreatedBy",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorNotificationRuleRelationships.js.map
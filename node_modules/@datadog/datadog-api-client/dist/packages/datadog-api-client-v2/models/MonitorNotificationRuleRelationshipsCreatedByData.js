"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorNotificationRuleRelationshipsCreatedByData = void 0;
/**
 * Data for the user who created the monitor notification rule.
 */
class MonitorNotificationRuleRelationshipsCreatedByData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorNotificationRuleRelationshipsCreatedByData.attributeTypeMap;
    }
}
exports.MonitorNotificationRuleRelationshipsCreatedByData = MonitorNotificationRuleRelationshipsCreatedByData;
/**
 * @ignore
 */
MonitorNotificationRuleRelationshipsCreatedByData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "UsersType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorNotificationRuleRelationshipsCreatedByData.js.map
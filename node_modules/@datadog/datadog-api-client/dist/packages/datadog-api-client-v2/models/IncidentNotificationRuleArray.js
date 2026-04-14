"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentNotificationRuleArray = void 0;
/**
 * Response with notification rules.
 */
class IncidentNotificationRuleArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentNotificationRuleArray.attributeTypeMap;
    }
}
exports.IncidentNotificationRuleArray = IncidentNotificationRuleArray;
/**
 * @ignore
 */
IncidentNotificationRuleArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<IncidentNotificationRuleResponseData>",
        required: true,
    },
    included: {
        baseName: "included",
        type: "Array<IncidentNotificationRuleIncludedItems>",
    },
    meta: {
        baseName: "meta",
        type: "IncidentNotificationRuleArrayMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentNotificationRuleArray.js.map
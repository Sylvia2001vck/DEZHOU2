"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentNotificationRuleArrayMeta = void 0;
/**
 * Response metadata.
 */
class IncidentNotificationRuleArrayMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentNotificationRuleArrayMeta.attributeTypeMap;
    }
}
exports.IncidentNotificationRuleArrayMeta = IncidentNotificationRuleArrayMeta;
/**
 * @ignore
 */
IncidentNotificationRuleArrayMeta.attributeTypeMap = {
    pagination: {
        baseName: "pagination",
        type: "IncidentNotificationRuleArrayMetaPage",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentNotificationRuleArrayMeta.js.map
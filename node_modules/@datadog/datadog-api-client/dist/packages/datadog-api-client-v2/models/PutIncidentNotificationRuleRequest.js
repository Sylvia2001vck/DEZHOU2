"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutIncidentNotificationRuleRequest = void 0;
/**
 * Put request for a notification rule.
 */
class PutIncidentNotificationRuleRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PutIncidentNotificationRuleRequest.attributeTypeMap;
    }
}
exports.PutIncidentNotificationRuleRequest = PutIncidentNotificationRuleRequest;
/**
 * @ignore
 */
PutIncidentNotificationRuleRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentNotificationRuleUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PutIncidentNotificationRuleRequest.js.map
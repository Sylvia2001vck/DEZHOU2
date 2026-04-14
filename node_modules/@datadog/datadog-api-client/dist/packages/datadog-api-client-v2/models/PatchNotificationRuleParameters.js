"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchNotificationRuleParameters = void 0;
/**
 * Body of the notification rule patch request.
 */
class PatchNotificationRuleParameters {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PatchNotificationRuleParameters.attributeTypeMap;
    }
}
exports.PatchNotificationRuleParameters = PatchNotificationRuleParameters;
/**
 * @ignore
 */
PatchNotificationRuleParameters.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "PatchNotificationRuleParametersData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PatchNotificationRuleParameters.js.map
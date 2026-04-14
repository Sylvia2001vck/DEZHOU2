"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamNotificationRulesResponse = void 0;
/**
 * Team notification rules response
 */
class TeamNotificationRulesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamNotificationRulesResponse.attributeTypeMap;
    }
}
exports.TeamNotificationRulesResponse = TeamNotificationRulesResponse;
/**
 * @ignore
 */
TeamNotificationRulesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<TeamNotificationRule>",
    },
    meta: {
        baseName: "meta",
        type: "TeamNotificationRulesResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamNotificationRulesResponse.js.map
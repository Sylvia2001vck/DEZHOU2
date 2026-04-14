"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamNotificationRulesResponseMeta = void 0;
/**
 * Metadata that is included in the response when querying the team notification rules
 */
class TeamNotificationRulesResponseMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamNotificationRulesResponseMeta.attributeTypeMap;
    }
}
exports.TeamNotificationRulesResponseMeta = TeamNotificationRulesResponseMeta;
/**
 * @ignore
 */
TeamNotificationRulesResponseMeta.attributeTypeMap = {
    page: {
        baseName: "page",
        type: "TeamNotificationRulesResponseMetaPage",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamNotificationRulesResponseMeta.js.map
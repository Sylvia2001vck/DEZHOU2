"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamLinkResponse = void 0;
/**
 * Team link response
 */
class TeamLinkResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamLinkResponse.attributeTypeMap;
    }
}
exports.TeamLinkResponse = TeamLinkResponse;
/**
 * @ignore
 */
TeamLinkResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "TeamLink",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamLinkResponse.js.map
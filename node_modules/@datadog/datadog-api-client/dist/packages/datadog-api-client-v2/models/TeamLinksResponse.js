"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamLinksResponse = void 0;
/**
 * Team links response
 */
class TeamLinksResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamLinksResponse.attributeTypeMap;
    }
}
exports.TeamLinksResponse = TeamLinksResponse;
/**
 * @ignore
 */
TeamLinksResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<TeamLink>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamLinksResponse.js.map
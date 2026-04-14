"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamResponse = void 0;
/**
 * Response with a team
 */
class TeamResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamResponse.attributeTypeMap;
    }
}
exports.TeamResponse = TeamResponse;
/**
 * @ignore
 */
TeamResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Team",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamResponse.js.map
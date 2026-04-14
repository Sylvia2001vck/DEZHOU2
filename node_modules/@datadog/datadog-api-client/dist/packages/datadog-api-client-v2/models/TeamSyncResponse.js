"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamSyncResponse = void 0;
/**
 * Team sync configurations response.
 */
class TeamSyncResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamSyncResponse.attributeTypeMap;
    }
}
exports.TeamSyncResponse = TeamSyncResponse;
/**
 * @ignore
 */
TeamSyncResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<TeamSyncData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamSyncResponse.js.map
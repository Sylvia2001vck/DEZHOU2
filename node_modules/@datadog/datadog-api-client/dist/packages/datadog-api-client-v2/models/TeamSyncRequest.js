"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamSyncRequest = void 0;
/**
 * Team sync request.
 */
class TeamSyncRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamSyncRequest.attributeTypeMap;
    }
}
exports.TeamSyncRequest = TeamSyncRequest;
/**
 * @ignore
 */
TeamSyncRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "TeamSyncData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamSyncRequest.js.map
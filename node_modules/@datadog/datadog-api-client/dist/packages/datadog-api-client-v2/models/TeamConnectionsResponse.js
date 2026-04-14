"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamConnectionsResponse = void 0;
/**
 * Response containing information about multiple team connections.
 */
class TeamConnectionsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamConnectionsResponse.attributeTypeMap;
    }
}
exports.TeamConnectionsResponse = TeamConnectionsResponse;
/**
 * @ignore
 */
TeamConnectionsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<TeamConnection>",
    },
    meta: {
        baseName: "meta",
        type: "ConnectionsResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamConnectionsResponse.js.map
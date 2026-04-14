"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamConnectionDeleteRequest = void 0;
/**
 * Request for deleting team connections.
 */
class TeamConnectionDeleteRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamConnectionDeleteRequest.attributeTypeMap;
    }
}
exports.TeamConnectionDeleteRequest = TeamConnectionDeleteRequest;
/**
 * @ignore
 */
TeamConnectionDeleteRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<TeamConnectionDeleteRequestDataItem>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamConnectionDeleteRequest.js.map
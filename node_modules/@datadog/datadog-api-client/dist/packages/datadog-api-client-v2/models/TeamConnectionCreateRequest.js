"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamConnectionCreateRequest = void 0;
/**
 * Request for creating team connections.
 */
class TeamConnectionCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamConnectionCreateRequest.attributeTypeMap;
    }
}
exports.TeamConnectionCreateRequest = TeamConnectionCreateRequest;
/**
 * @ignore
 */
TeamConnectionCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<TeamConnectionCreateData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamConnectionCreateRequest.js.map
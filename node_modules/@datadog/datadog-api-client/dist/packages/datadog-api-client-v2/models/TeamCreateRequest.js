"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamCreateRequest = void 0;
/**
 * Request to create a team
 */
class TeamCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamCreateRequest.attributeTypeMap;
    }
}
exports.TeamCreateRequest = TeamCreateRequest;
/**
 * @ignore
 */
TeamCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "TeamCreate",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamCreateRequest.js.map
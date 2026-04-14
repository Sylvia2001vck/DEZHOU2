"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamLinkCreateRequest = void 0;
/**
 * Team link create request
 */
class TeamLinkCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamLinkCreateRequest.attributeTypeMap;
    }
}
exports.TeamLinkCreateRequest = TeamLinkCreateRequest;
/**
 * @ignore
 */
TeamLinkCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "TeamLinkCreate",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamLinkCreateRequest.js.map
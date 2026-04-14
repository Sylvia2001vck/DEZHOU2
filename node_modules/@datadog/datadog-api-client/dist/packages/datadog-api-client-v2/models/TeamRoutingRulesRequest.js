"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamRoutingRulesRequest = void 0;
/**
 * Represents a request to create or update team routing rules, including the data payload.
 */
class TeamRoutingRulesRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamRoutingRulesRequest.attributeTypeMap;
    }
}
exports.TeamRoutingRulesRequest = TeamRoutingRulesRequest;
/**
 * @ignore
 */
TeamRoutingRulesRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "TeamRoutingRulesRequestData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamRoutingRulesRequest.js.map
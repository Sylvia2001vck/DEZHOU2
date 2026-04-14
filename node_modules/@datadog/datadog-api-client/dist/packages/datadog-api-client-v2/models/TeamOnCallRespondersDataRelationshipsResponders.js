"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamOnCallRespondersDataRelationshipsResponders = void 0;
/**
 * Defines the list of users assigned as on-call responders for the team.
 */
class TeamOnCallRespondersDataRelationshipsResponders {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamOnCallRespondersDataRelationshipsResponders.attributeTypeMap;
    }
}
exports.TeamOnCallRespondersDataRelationshipsResponders = TeamOnCallRespondersDataRelationshipsResponders;
/**
 * @ignore
 */
TeamOnCallRespondersDataRelationshipsResponders.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<TeamOnCallRespondersDataRelationshipsRespondersDataItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamOnCallRespondersDataRelationshipsResponders.js.map
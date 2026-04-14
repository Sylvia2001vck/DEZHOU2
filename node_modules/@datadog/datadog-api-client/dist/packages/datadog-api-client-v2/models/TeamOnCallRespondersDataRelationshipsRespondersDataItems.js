"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamOnCallRespondersDataRelationshipsRespondersDataItems = void 0;
/**
 * Represents a user responder associated with the on-call team.
 */
class TeamOnCallRespondersDataRelationshipsRespondersDataItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamOnCallRespondersDataRelationshipsRespondersDataItems.attributeTypeMap;
    }
}
exports.TeamOnCallRespondersDataRelationshipsRespondersDataItems = TeamOnCallRespondersDataRelationshipsRespondersDataItems;
/**
 * @ignore
 */
TeamOnCallRespondersDataRelationshipsRespondersDataItems.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "TeamOnCallRespondersDataRelationshipsRespondersDataItemsType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamOnCallRespondersDataRelationshipsRespondersDataItems.js.map
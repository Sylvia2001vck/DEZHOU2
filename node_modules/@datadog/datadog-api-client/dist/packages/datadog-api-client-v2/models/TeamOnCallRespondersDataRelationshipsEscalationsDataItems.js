"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamOnCallRespondersDataRelationshipsEscalationsDataItems = void 0;
/**
 * Represents a link to a specific escalation policy step associated with the on-call team.
 */
class TeamOnCallRespondersDataRelationshipsEscalationsDataItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamOnCallRespondersDataRelationshipsEscalationsDataItems.attributeTypeMap;
    }
}
exports.TeamOnCallRespondersDataRelationshipsEscalationsDataItems = TeamOnCallRespondersDataRelationshipsEscalationsDataItems;
/**
 * @ignore
 */
TeamOnCallRespondersDataRelationshipsEscalationsDataItems.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "TeamOnCallRespondersDataRelationshipsEscalationsDataItemsType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamOnCallRespondersDataRelationshipsEscalationsDataItems.js.map
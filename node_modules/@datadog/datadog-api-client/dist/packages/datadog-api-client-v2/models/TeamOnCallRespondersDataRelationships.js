"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamOnCallRespondersDataRelationships = void 0;
/**
 * Relationship objects linked to a team's on-call responder configuration, including escalations and responders.
 */
class TeamOnCallRespondersDataRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamOnCallRespondersDataRelationships.attributeTypeMap;
    }
}
exports.TeamOnCallRespondersDataRelationships = TeamOnCallRespondersDataRelationships;
/**
 * @ignore
 */
TeamOnCallRespondersDataRelationships.attributeTypeMap = {
    escalations: {
        baseName: "escalations",
        type: "TeamOnCallRespondersDataRelationshipsEscalations",
    },
    responders: {
        baseName: "responders",
        type: "TeamOnCallRespondersDataRelationshipsResponders",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamOnCallRespondersDataRelationships.js.map
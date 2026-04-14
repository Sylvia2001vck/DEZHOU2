"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamOnCallRespondersDataRelationshipsEscalations = void 0;
/**
 * Defines the escalation policy steps linked to the team's on-call configuration.
 */
class TeamOnCallRespondersDataRelationshipsEscalations {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamOnCallRespondersDataRelationshipsEscalations.attributeTypeMap;
    }
}
exports.TeamOnCallRespondersDataRelationshipsEscalations = TeamOnCallRespondersDataRelationshipsEscalations;
/**
 * @ignore
 */
TeamOnCallRespondersDataRelationshipsEscalations.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<TeamOnCallRespondersDataRelationshipsEscalationsDataItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamOnCallRespondersDataRelationshipsEscalations.js.map
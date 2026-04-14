"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleCreateRequestDataRelationships = void 0;
/**
 * Gathers relationship objects for the schedule creation request, including the teams to associate.
 */
class ScheduleCreateRequestDataRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScheduleCreateRequestDataRelationships.attributeTypeMap;
    }
}
exports.ScheduleCreateRequestDataRelationships = ScheduleCreateRequestDataRelationships;
/**
 * @ignore
 */
ScheduleCreateRequestDataRelationships.attributeTypeMap = {
    teams: {
        baseName: "teams",
        type: "DataRelationshipsTeams",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScheduleCreateRequestDataRelationships.js.map
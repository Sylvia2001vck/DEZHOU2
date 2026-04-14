"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleUpdateRequestDataRelationships = void 0;
/**
 * Houses relationships for the schedule update, typically referencing teams.
 */
class ScheduleUpdateRequestDataRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScheduleUpdateRequestDataRelationships.attributeTypeMap;
    }
}
exports.ScheduleUpdateRequestDataRelationships = ScheduleUpdateRequestDataRelationships;
/**
 * @ignore
 */
ScheduleUpdateRequestDataRelationships.attributeTypeMap = {
    teams: {
        baseName: "teams",
        type: "DataRelationshipsTeams",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScheduleUpdateRequestDataRelationships.js.map
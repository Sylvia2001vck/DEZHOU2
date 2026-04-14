"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleDataRelationships = void 0;
/**
 * Groups the relationships for a schedule object, referencing layers and teams.
 */
class ScheduleDataRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScheduleDataRelationships.attributeTypeMap;
    }
}
exports.ScheduleDataRelationships = ScheduleDataRelationships;
/**
 * @ignore
 */
ScheduleDataRelationships.attributeTypeMap = {
    layers: {
        baseName: "layers",
        type: "ScheduleDataRelationshipsLayers",
    },
    teams: {
        baseName: "teams",
        type: "DataRelationshipsTeams",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScheduleDataRelationships.js.map
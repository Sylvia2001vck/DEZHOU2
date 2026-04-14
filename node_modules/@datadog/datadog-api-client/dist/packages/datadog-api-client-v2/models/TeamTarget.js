"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamTarget = void 0;
/**
 * Represents a team target for an escalation policy step, including the team's ID and resource type.
 */
class TeamTarget {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamTarget.attributeTypeMap;
    }
}
exports.TeamTarget = TeamTarget;
/**
 * @ignore
 */
TeamTarget.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "TeamTargetType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamTarget.js.map
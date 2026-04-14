"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Team = void 0;
/**
 * A team
 */
class Team {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Team.attributeTypeMap;
    }
}
exports.Team = Team;
/**
 * @ignore
 */
Team.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "TeamAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "TeamRelationships",
    },
    type: {
        baseName: "type",
        type: "TeamType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Team.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamCreate = void 0;
/**
 * Team create
 */
class TeamCreate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamCreate.attributeTypeMap;
    }
}
exports.TeamCreate = TeamCreate;
/**
 * @ignore
 */
TeamCreate.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "TeamCreateAttributes",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "TeamCreateRelationships",
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
//# sourceMappingURL=TeamCreate.js.map
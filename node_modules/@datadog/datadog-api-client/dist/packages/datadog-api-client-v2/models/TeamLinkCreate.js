"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamLinkCreate = void 0;
/**
 * Team link create
 */
class TeamLinkCreate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamLinkCreate.attributeTypeMap;
    }
}
exports.TeamLinkCreate = TeamLinkCreate;
/**
 * @ignore
 */
TeamLinkCreate.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "TeamLinkAttributes",
        required: true,
    },
    type: {
        baseName: "type",
        type: "TeamLinkType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamLinkCreate.js.map
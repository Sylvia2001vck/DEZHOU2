"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamLink = void 0;
/**
 * Team link
 */
class TeamLink {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamLink.attributeTypeMap;
    }
}
exports.TeamLink = TeamLink;
/**
 * @ignore
 */
TeamLink.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "TeamLinkAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=TeamLink.js.map
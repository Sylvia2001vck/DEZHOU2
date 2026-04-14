"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamsResponse = void 0;
/**
 * Response with multiple teams
 */
class TeamsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamsResponse.attributeTypeMap;
    }
}
exports.TeamsResponse = TeamsResponse;
/**
 * @ignore
 */
TeamsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<Team>",
    },
    included: {
        baseName: "included",
        type: "Array<TeamIncluded>",
    },
    links: {
        baseName: "links",
        type: "TeamsResponseLinks",
    },
    meta: {
        baseName: "meta",
        type: "TeamsResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamsResponse.js.map
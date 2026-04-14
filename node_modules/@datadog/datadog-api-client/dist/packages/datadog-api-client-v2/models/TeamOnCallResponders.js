"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamOnCallResponders = void 0;
/**
 * Root object representing a team's on-call responder configuration.
 */
class TeamOnCallResponders {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamOnCallResponders.attributeTypeMap;
    }
}
exports.TeamOnCallResponders = TeamOnCallResponders;
/**
 * @ignore
 */
TeamOnCallResponders.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "TeamOnCallRespondersData",
    },
    included: {
        baseName: "included",
        type: "Array<TeamOnCallRespondersIncluded>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamOnCallResponders.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamOnCallRespondersData = void 0;
/**
 * Defines the main on-call responder object for a team, including relationships and metadata.
 */
class TeamOnCallRespondersData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamOnCallRespondersData.attributeTypeMap;
    }
}
exports.TeamOnCallRespondersData = TeamOnCallRespondersData;
/**
 * @ignore
 */
TeamOnCallRespondersData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "TeamOnCallRespondersDataRelationships",
    },
    type: {
        baseName: "type",
        type: "TeamOnCallRespondersDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamOnCallRespondersData.js.map
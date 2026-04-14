"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamRoutingRulesRequestData = void 0;
/**
 * Holds the data necessary to create or update team routing rules, including attributes, ID, and resource type.
 */
class TeamRoutingRulesRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamRoutingRulesRequestData.attributeTypeMap;
    }
}
exports.TeamRoutingRulesRequestData = TeamRoutingRulesRequestData;
/**
 * @ignore
 */
TeamRoutingRulesRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "TeamRoutingRulesRequestDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "TeamRoutingRulesRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamRoutingRulesRequestData.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamRoutingRulesDataRelationshipsRulesDataItems = void 0;
/**
 * Defines a relationship item to link a routing rule by its ID and type.
 */
class TeamRoutingRulesDataRelationshipsRulesDataItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamRoutingRulesDataRelationshipsRulesDataItems.attributeTypeMap;
    }
}
exports.TeamRoutingRulesDataRelationshipsRulesDataItems = TeamRoutingRulesDataRelationshipsRulesDataItems;
/**
 * @ignore
 */
TeamRoutingRulesDataRelationshipsRulesDataItems.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "TeamRoutingRulesDataRelationshipsRulesDataItemsType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamRoutingRulesDataRelationshipsRulesDataItems.js.map
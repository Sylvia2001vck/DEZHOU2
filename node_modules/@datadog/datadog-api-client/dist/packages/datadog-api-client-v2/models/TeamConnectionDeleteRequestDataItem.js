"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamConnectionDeleteRequestDataItem = void 0;
/**
 * A collection of connection ids to delete.
 */
class TeamConnectionDeleteRequestDataItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamConnectionDeleteRequestDataItem.attributeTypeMap;
    }
}
exports.TeamConnectionDeleteRequestDataItem = TeamConnectionDeleteRequestDataItem;
/**
 * @ignore
 */
TeamConnectionDeleteRequestDataItem.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "TeamConnectionType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamConnectionDeleteRequestDataItem.js.map
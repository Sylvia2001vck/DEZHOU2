"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamSyncData = void 0;
/**
 * A configuration governing syncing between Datadog teams and teams from an external system.
 */
class TeamSyncData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamSyncData.attributeTypeMap;
    }
}
exports.TeamSyncData = TeamSyncData;
/**
 * @ignore
 */
TeamSyncData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "TeamSyncAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "TeamSyncBulkType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamSyncData.js.map
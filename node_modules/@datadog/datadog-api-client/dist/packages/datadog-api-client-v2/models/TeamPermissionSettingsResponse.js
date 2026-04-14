"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamPermissionSettingsResponse = void 0;
/**
 * Team permission settings response
 */
class TeamPermissionSettingsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamPermissionSettingsResponse.attributeTypeMap;
    }
}
exports.TeamPermissionSettingsResponse = TeamPermissionSettingsResponse;
/**
 * @ignore
 */
TeamPermissionSettingsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<TeamPermissionSetting>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamPermissionSettingsResponse.js.map
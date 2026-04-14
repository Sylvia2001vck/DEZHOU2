"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamPermissionSettingResponse = void 0;
/**
 * Team permission setting response
 */
class TeamPermissionSettingResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamPermissionSettingResponse.attributeTypeMap;
    }
}
exports.TeamPermissionSettingResponse = TeamPermissionSettingResponse;
/**
 * @ignore
 */
TeamPermissionSettingResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "TeamPermissionSetting",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamPermissionSettingResponse.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamPermissionSettingUpdateRequest = void 0;
/**
 * Team permission setting update request
 */
class TeamPermissionSettingUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamPermissionSettingUpdateRequest.attributeTypeMap;
    }
}
exports.TeamPermissionSettingUpdateRequest = TeamPermissionSettingUpdateRequest;
/**
 * @ignore
 */
TeamPermissionSettingUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "TeamPermissionSettingUpdate",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamPermissionSettingUpdateRequest.js.map
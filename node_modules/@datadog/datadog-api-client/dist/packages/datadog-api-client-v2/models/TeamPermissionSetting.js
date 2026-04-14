"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamPermissionSetting = void 0;
/**
 * Team permission setting
 */
class TeamPermissionSetting {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamPermissionSetting.attributeTypeMap;
    }
}
exports.TeamPermissionSetting = TeamPermissionSetting;
/**
 * @ignore
 */
TeamPermissionSetting.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "TeamPermissionSettingAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "TeamPermissionSettingType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamPermissionSetting.js.map
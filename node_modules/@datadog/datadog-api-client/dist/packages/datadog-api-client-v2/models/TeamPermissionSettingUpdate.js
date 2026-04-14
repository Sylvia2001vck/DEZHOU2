"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamPermissionSettingUpdate = void 0;
/**
 * Team permission setting update
 */
class TeamPermissionSettingUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamPermissionSettingUpdate.attributeTypeMap;
    }
}
exports.TeamPermissionSettingUpdate = TeamPermissionSettingUpdate;
/**
 * @ignore
 */
TeamPermissionSettingUpdate.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "TeamPermissionSettingUpdateAttributes",
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
//# sourceMappingURL=TeamPermissionSettingUpdate.js.map
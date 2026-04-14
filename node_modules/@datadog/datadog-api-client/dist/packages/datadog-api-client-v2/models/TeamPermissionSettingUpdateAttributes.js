"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamPermissionSettingUpdateAttributes = void 0;
/**
 * Team permission setting update attributes
 */
class TeamPermissionSettingUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamPermissionSettingUpdateAttributes.attributeTypeMap;
    }
}
exports.TeamPermissionSettingUpdateAttributes = TeamPermissionSettingUpdateAttributes;
/**
 * @ignore
 */
TeamPermissionSettingUpdateAttributes.attributeTypeMap = {
    value: {
        baseName: "value",
        type: "TeamPermissionSettingValue",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamPermissionSettingUpdateAttributes.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamPermissionSettingAttributes = void 0;
/**
 * Team permission setting attributes
 */
class TeamPermissionSettingAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TeamPermissionSettingAttributes.attributeTypeMap;
    }
}
exports.TeamPermissionSettingAttributes = TeamPermissionSettingAttributes;
/**
 * @ignore
 */
TeamPermissionSettingAttributes.attributeTypeMap = {
    action: {
        baseName: "action",
        type: "TeamPermissionSettingSerializerAction",
    },
    editable: {
        baseName: "editable",
        type: "boolean",
    },
    options: {
        baseName: "options",
        type: "Array<TeamPermissionSettingValue>",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    value: {
        baseName: "value",
        type: "TeamPermissionSettingValue",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TeamPermissionSettingAttributes.js.map
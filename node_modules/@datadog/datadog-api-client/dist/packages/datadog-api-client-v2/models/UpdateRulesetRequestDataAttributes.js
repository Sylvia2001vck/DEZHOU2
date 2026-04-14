"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRulesetRequestDataAttributes = void 0;
/**
 * The definition of `UpdateRulesetRequestDataAttributes` object.
 */
class UpdateRulesetRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateRulesetRequestDataAttributes.attributeTypeMap;
    }
}
exports.UpdateRulesetRequestDataAttributes = UpdateRulesetRequestDataAttributes;
/**
 * @ignore
 */
UpdateRulesetRequestDataAttributes.attributeTypeMap = {
    enabled: {
        baseName: "enabled",
        type: "boolean",
        required: true,
    },
    lastVersion: {
        baseName: "last_version",
        type: "number",
        format: "int64",
    },
    rules: {
        baseName: "rules",
        type: "Array<UpdateRulesetRequestDataAttributesRulesItems>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateRulesetRequestDataAttributes.js.map
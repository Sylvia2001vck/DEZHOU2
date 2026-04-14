"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRulesetRequestData = void 0;
/**
 * The definition of `UpdateRulesetRequestData` object.
 */
class UpdateRulesetRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateRulesetRequestData.attributeTypeMap;
    }
}
exports.UpdateRulesetRequestData = UpdateRulesetRequestData;
/**
 * @ignore
 */
UpdateRulesetRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "UpdateRulesetRequestDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "UpdateRulesetRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateRulesetRequestData.js.map
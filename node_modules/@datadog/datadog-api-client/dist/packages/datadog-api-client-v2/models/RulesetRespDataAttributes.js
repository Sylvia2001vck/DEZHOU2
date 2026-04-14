"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesetRespDataAttributes = void 0;
/**
 * The definition of `RulesetRespDataAttributes` object.
 */
class RulesetRespDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RulesetRespDataAttributes.attributeTypeMap;
    }
}
exports.RulesetRespDataAttributes = RulesetRespDataAttributes;
/**
 * @ignore
 */
RulesetRespDataAttributes.attributeTypeMap = {
    created: {
        baseName: "created",
        type: "RulesetRespDataAttributesCreated",
        required: true,
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
        required: true,
    },
    lastModifiedUserUuid: {
        baseName: "last_modified_user_uuid",
        type: "string",
        required: true,
    },
    modified: {
        baseName: "modified",
        type: "RulesetRespDataAttributesModified",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    position: {
        baseName: "position",
        type: "number",
        required: true,
        format: "int32",
    },
    processingStatus: {
        baseName: "processing_status",
        type: "string",
    },
    rules: {
        baseName: "rules",
        type: "Array<RulesetRespDataAttributesRulesItems>",
        required: true,
    },
    version: {
        baseName: "version",
        type: "number",
        required: true,
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RulesetRespDataAttributes.js.map
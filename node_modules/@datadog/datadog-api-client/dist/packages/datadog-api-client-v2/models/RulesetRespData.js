"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RulesetRespData = void 0;
/**
 * The definition of `RulesetRespData` object.
 */
class RulesetRespData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RulesetRespData.attributeTypeMap;
    }
}
exports.RulesetRespData = RulesetRespData;
/**
 * @ignore
 */
RulesetRespData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RulesetRespDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "RulesetRespDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RulesetRespData.js.map
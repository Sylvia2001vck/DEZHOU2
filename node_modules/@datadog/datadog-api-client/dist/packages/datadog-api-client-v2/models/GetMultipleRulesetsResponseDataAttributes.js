"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMultipleRulesetsResponseDataAttributes = void 0;
class GetMultipleRulesetsResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetMultipleRulesetsResponseDataAttributes.attributeTypeMap;
    }
}
exports.GetMultipleRulesetsResponseDataAttributes = GetMultipleRulesetsResponseDataAttributes;
/**
 * @ignore
 */
GetMultipleRulesetsResponseDataAttributes.attributeTypeMap = {
    rulesets: {
        baseName: "rulesets",
        type: "Array<GetMultipleRulesetsResponseDataAttributesRulesetsItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GetMultipleRulesetsResponseDataAttributes.js.map
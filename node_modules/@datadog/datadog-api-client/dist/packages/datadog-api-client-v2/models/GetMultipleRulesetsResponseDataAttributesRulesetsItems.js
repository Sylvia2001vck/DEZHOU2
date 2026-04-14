"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMultipleRulesetsResponseDataAttributesRulesetsItems = void 0;
class GetMultipleRulesetsResponseDataAttributesRulesetsItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetMultipleRulesetsResponseDataAttributesRulesetsItems.attributeTypeMap;
    }
}
exports.GetMultipleRulesetsResponseDataAttributesRulesetsItems = GetMultipleRulesetsResponseDataAttributesRulesetsItems;
/**
 * @ignore
 */
GetMultipleRulesetsResponseDataAttributesRulesetsItems.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "GetMultipleRulesetsResponseDataAttributesRulesetsItemsData",
        required: true,
    },
    description: {
        baseName: "description",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    rules: {
        baseName: "rules",
        type: "Array<GetMultipleRulesetsResponseDataAttributesRulesetsItemsRulesItems>",
    },
    shortDescription: {
        baseName: "short_description",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GetMultipleRulesetsResponseDataAttributesRulesetsItems.js.map
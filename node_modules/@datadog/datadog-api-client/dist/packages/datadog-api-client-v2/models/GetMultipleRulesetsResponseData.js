"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMultipleRulesetsResponseData = void 0;
class GetMultipleRulesetsResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetMultipleRulesetsResponseData.attributeTypeMap;
    }
}
exports.GetMultipleRulesetsResponseData = GetMultipleRulesetsResponseData;
/**
 * @ignore
 */
GetMultipleRulesetsResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "GetMultipleRulesetsResponseDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "GetMultipleRulesetsResponseDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GetMultipleRulesetsResponseData.js.map
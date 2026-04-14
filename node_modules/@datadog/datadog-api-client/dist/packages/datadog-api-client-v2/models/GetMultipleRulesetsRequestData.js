"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMultipleRulesetsRequestData = void 0;
class GetMultipleRulesetsRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetMultipleRulesetsRequestData.attributeTypeMap;
    }
}
exports.GetMultipleRulesetsRequestData = GetMultipleRulesetsRequestData;
/**
 * @ignore
 */
GetMultipleRulesetsRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "GetMultipleRulesetsRequestDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "GetMultipleRulesetsRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GetMultipleRulesetsRequestData.js.map
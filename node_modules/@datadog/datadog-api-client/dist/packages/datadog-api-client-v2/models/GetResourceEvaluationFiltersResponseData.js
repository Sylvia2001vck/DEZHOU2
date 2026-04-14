"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetResourceEvaluationFiltersResponseData = void 0;
/**
 * The definition of `GetResourceFilterResponseData` object.
 */
class GetResourceEvaluationFiltersResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetResourceEvaluationFiltersResponseData.attributeTypeMap;
    }
}
exports.GetResourceEvaluationFiltersResponseData = GetResourceEvaluationFiltersResponseData;
/**
 * @ignore
 */
GetResourceEvaluationFiltersResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ResourceFilterAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ResourceFilterRequestType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GetResourceEvaluationFiltersResponseData.js.map
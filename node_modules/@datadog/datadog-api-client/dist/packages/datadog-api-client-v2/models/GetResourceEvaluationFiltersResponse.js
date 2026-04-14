"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetResourceEvaluationFiltersResponse = void 0;
/**
 * The definition of `GetResourceEvaluationFiltersResponse` object.
 */
class GetResourceEvaluationFiltersResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetResourceEvaluationFiltersResponse.attributeTypeMap;
    }
}
exports.GetResourceEvaluationFiltersResponse = GetResourceEvaluationFiltersResponse;
/**
 * @ignore
 */
GetResourceEvaluationFiltersResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "GetResourceEvaluationFiltersResponseData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GetResourceEvaluationFiltersResponse.js.map
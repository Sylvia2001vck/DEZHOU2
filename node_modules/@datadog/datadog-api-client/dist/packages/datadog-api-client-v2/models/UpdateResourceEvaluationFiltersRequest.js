"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateResourceEvaluationFiltersRequest = void 0;
/**
 * Request object to update a resource filter.
 */
class UpdateResourceEvaluationFiltersRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateResourceEvaluationFiltersRequest.attributeTypeMap;
    }
}
exports.UpdateResourceEvaluationFiltersRequest = UpdateResourceEvaluationFiltersRequest;
/**
 * @ignore
 */
UpdateResourceEvaluationFiltersRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "UpdateResourceEvaluationFiltersRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateResourceEvaluationFiltersRequest.js.map
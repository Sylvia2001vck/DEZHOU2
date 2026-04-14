"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateResourceEvaluationFiltersResponseData = void 0;
/**
 * The definition of `UpdateResourceFilterResponseData` object.
 */
class UpdateResourceEvaluationFiltersResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateResourceEvaluationFiltersResponseData.attributeTypeMap;
    }
}
exports.UpdateResourceEvaluationFiltersResponseData = UpdateResourceEvaluationFiltersResponseData;
/**
 * @ignore
 */
UpdateResourceEvaluationFiltersResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ResourceFilterAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ResourceFilterRequestType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateResourceEvaluationFiltersResponseData.js.map
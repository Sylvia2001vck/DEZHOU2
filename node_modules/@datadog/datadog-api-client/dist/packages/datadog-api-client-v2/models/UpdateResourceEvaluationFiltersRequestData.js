"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateResourceEvaluationFiltersRequestData = void 0;
/**
 * The definition of `UpdateResourceFilterRequestData` object.
 */
class UpdateResourceEvaluationFiltersRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateResourceEvaluationFiltersRequestData.attributeTypeMap;
    }
}
exports.UpdateResourceEvaluationFiltersRequestData = UpdateResourceEvaluationFiltersRequestData;
/**
 * @ignore
 */
UpdateResourceEvaluationFiltersRequestData.attributeTypeMap = {
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
//# sourceMappingURL=UpdateResourceEvaluationFiltersRequestData.js.map
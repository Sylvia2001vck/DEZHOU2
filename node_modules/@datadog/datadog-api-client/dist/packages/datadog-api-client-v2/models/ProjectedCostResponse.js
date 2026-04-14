"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectedCostResponse = void 0;
/**
 * Projected Cost response.
 */
class ProjectedCostResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProjectedCostResponse.attributeTypeMap;
    }
}
exports.ProjectedCostResponse = ProjectedCostResponse;
/**
 * @ignore
 */
ProjectedCostResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<ProjectedCost>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProjectedCostResponse.js.map
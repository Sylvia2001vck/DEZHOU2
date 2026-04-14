"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectedCost = void 0;
/**
 * Projected Cost data.
 */
class ProjectedCost {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProjectedCost.attributeTypeMap;
    }
}
exports.ProjectedCost = ProjectedCost;
/**
 * @ignore
 */
ProjectedCost.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ProjectedCostAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ProjectedCostType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProjectedCost.js.map
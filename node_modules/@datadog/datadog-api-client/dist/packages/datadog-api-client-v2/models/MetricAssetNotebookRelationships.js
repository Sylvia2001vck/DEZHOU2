"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricAssetNotebookRelationships = void 0;
/**
 * An object containing the list of notebooks that can be referenced in the `included` data.
 */
class MetricAssetNotebookRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricAssetNotebookRelationships.attributeTypeMap;
    }
}
exports.MetricAssetNotebookRelationships = MetricAssetNotebookRelationships;
/**
 * @ignore
 */
MetricAssetNotebookRelationships.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<MetricAssetNotebookRelationship>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricAssetNotebookRelationships.js.map
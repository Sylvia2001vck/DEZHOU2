"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricAssetNotebookRelationship = void 0;
/**
 * An object of type `notebook` that can be referenced in the `included` data.
 */
class MetricAssetNotebookRelationship {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricAssetNotebookRelationship.attributeTypeMap;
    }
}
exports.MetricAssetNotebookRelationship = MetricAssetNotebookRelationship;
/**
 * @ignore
 */
MetricAssetNotebookRelationship.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "MetricNotebookType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricAssetNotebookRelationship.js.map
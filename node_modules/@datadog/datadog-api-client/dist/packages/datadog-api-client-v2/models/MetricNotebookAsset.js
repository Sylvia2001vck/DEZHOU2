"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricNotebookAsset = void 0;
/**
 * A notebook object with title.
 */
class MetricNotebookAsset {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricNotebookAsset.attributeTypeMap;
    }
}
exports.MetricNotebookAsset = MetricNotebookAsset;
/**
 * @ignore
 */
MetricNotebookAsset.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MetricAssetAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "MetricNotebookType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricNotebookAsset.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricAssetResponseRelationships = void 0;
/**
 * Relationships to assets related to the metric.
 */
class MetricAssetResponseRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricAssetResponseRelationships.attributeTypeMap;
    }
}
exports.MetricAssetResponseRelationships = MetricAssetResponseRelationships;
/**
 * @ignore
 */
MetricAssetResponseRelationships.attributeTypeMap = {
    dashboards: {
        baseName: "dashboards",
        type: "MetricAssetDashboardRelationships",
    },
    monitors: {
        baseName: "monitors",
        type: "MetricAssetMonitorRelationships",
    },
    notebooks: {
        baseName: "notebooks",
        type: "MetricAssetNotebookRelationships",
    },
    slos: {
        baseName: "slos",
        type: "MetricAssetSLORelationships",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricAssetResponseRelationships.js.map
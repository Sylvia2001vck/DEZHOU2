"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricAssetMonitorRelationships = void 0;
/**
 * A object containing the list of monitors that can be referenced in the `included` data.
 */
class MetricAssetMonitorRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricAssetMonitorRelationships.attributeTypeMap;
    }
}
exports.MetricAssetMonitorRelationships = MetricAssetMonitorRelationships;
/**
 * @ignore
 */
MetricAssetMonitorRelationships.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<MetricAssetMonitorRelationship>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricAssetMonitorRelationships.js.map
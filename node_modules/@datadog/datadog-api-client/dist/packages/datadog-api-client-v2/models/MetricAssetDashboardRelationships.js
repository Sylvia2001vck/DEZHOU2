"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricAssetDashboardRelationships = void 0;
/**
 * An object containing the list of dashboards that can be referenced in the `included` data.
 */
class MetricAssetDashboardRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricAssetDashboardRelationships.attributeTypeMap;
    }
}
exports.MetricAssetDashboardRelationships = MetricAssetDashboardRelationships;
/**
 * @ignore
 */
MetricAssetDashboardRelationships.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<MetricAssetDashboardRelationship>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricAssetDashboardRelationships.js.map
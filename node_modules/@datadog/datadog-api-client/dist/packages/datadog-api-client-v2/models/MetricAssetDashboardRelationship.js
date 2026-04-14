"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricAssetDashboardRelationship = void 0;
/**
 * An object of type `dashboard` that can be referenced in the `included` data.
 */
class MetricAssetDashboardRelationship {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricAssetDashboardRelationship.attributeTypeMap;
    }
}
exports.MetricAssetDashboardRelationship = MetricAssetDashboardRelationship;
/**
 * @ignore
 */
MetricAssetDashboardRelationship.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "MetricDashboardType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricAssetDashboardRelationship.js.map
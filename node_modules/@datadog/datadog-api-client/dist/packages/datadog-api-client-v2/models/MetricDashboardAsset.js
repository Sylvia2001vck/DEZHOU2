"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricDashboardAsset = void 0;
/**
 * A dashboard object with title and popularity.
 */
class MetricDashboardAsset {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricDashboardAsset.attributeTypeMap;
    }
}
exports.MetricDashboardAsset = MetricDashboardAsset;
/**
 * @ignore
 */
MetricDashboardAsset.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MetricDashboardAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "MetricDashboardType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricDashboardAsset.js.map
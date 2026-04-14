"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricsAndMetricTagConfigurationsResponse = void 0;
/**
 * Response object that includes metrics and metric tag configurations.
 */
class MetricsAndMetricTagConfigurationsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricsAndMetricTagConfigurationsResponse.attributeTypeMap;
    }
}
exports.MetricsAndMetricTagConfigurationsResponse = MetricsAndMetricTagConfigurationsResponse;
/**
 * @ignore
 */
MetricsAndMetricTagConfigurationsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<MetricsAndMetricTagConfigurations>",
    },
    links: {
        baseName: "links",
        type: "MetricsListResponseLinks",
    },
    meta: {
        baseName: "meta",
        type: "MetricPaginationMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricsAndMetricTagConfigurationsResponse.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricTagConfigurationCreateRequest = void 0;
/**
 * Request object that includes the metric that you would like to configure tags for.
 */
class MetricTagConfigurationCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricTagConfigurationCreateRequest.attributeTypeMap;
    }
}
exports.MetricTagConfigurationCreateRequest = MetricTagConfigurationCreateRequest;
/**
 * @ignore
 */
MetricTagConfigurationCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MetricTagConfigurationCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricTagConfigurationCreateRequest.js.map
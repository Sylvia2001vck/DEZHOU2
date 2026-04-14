"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricTagConfigurationResponse = void 0;
/**
 * Response object which includes a single metric's tag configuration.
 */
class MetricTagConfigurationResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricTagConfigurationResponse.attributeTypeMap;
    }
}
exports.MetricTagConfigurationResponse = MetricTagConfigurationResponse;
/**
 * @ignore
 */
MetricTagConfigurationResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MetricTagConfiguration",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricTagConfigurationResponse.js.map
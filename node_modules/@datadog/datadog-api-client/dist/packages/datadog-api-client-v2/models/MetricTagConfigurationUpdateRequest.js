"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricTagConfigurationUpdateRequest = void 0;
/**
 * Request object that includes the metric that you would like to edit the tag configuration on.
 */
class MetricTagConfigurationUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricTagConfigurationUpdateRequest.attributeTypeMap;
    }
}
exports.MetricTagConfigurationUpdateRequest = MetricTagConfigurationUpdateRequest;
/**
 * @ignore
 */
MetricTagConfigurationUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "MetricTagConfigurationUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricTagConfigurationUpdateRequest.js.map
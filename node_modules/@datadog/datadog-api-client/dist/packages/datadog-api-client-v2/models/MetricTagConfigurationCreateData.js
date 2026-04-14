"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricTagConfigurationCreateData = void 0;
/**
 * Object for a single metric to be configure tags on.
 */
class MetricTagConfigurationCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricTagConfigurationCreateData.attributeTypeMap;
    }
}
exports.MetricTagConfigurationCreateData = MetricTagConfigurationCreateData;
/**
 * @ignore
 */
MetricTagConfigurationCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MetricTagConfigurationCreateAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "MetricTagConfigurationType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricTagConfigurationCreateData.js.map
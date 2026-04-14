"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricTagConfiguration = void 0;
/**
 * Object for a single metric tag configuration.
 */
class MetricTagConfiguration {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricTagConfiguration.attributeTypeMap;
    }
}
exports.MetricTagConfiguration = MetricTagConfiguration;
/**
 * @ignore
 */
MetricTagConfiguration.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MetricTagConfigurationAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "MetricTagConfigurationType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricTagConfiguration.js.map
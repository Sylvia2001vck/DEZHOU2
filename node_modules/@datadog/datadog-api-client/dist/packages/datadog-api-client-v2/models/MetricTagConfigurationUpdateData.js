"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricTagConfigurationUpdateData = void 0;
/**
 * Object for a single tag configuration to be edited.
 */
class MetricTagConfigurationUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricTagConfigurationUpdateData.attributeTypeMap;
    }
}
exports.MetricTagConfigurationUpdateData = MetricTagConfigurationUpdateData;
/**
 * @ignore
 */
MetricTagConfigurationUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "MetricTagConfigurationUpdateAttributes",
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
//# sourceMappingURL=MetricTagConfigurationUpdateData.js.map
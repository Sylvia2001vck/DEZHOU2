"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metric = void 0;
/**
 * Object for a single metric tag configuration.
 */
class Metric {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Metric.attributeTypeMap;
    }
}
exports.Metric = Metric;
/**
 * @ignore
 */
Metric.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "MetricType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Metric.js.map
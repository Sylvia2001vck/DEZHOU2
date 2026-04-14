"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricPayload = void 0;
/**
 * The metrics' payload.
 */
class MetricPayload {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricPayload.attributeTypeMap;
    }
}
exports.MetricPayload = MetricPayload;
/**
 * @ignore
 */
MetricPayload.attributeTypeMap = {
    series: {
        baseName: "series",
        type: "Array<MetricSeries>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricPayload.js.map
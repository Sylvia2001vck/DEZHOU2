"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansMetricResponseData = void 0;
/**
 * The span-based metric properties.
 */
class SpansMetricResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansMetricResponseData.attributeTypeMap;
    }
}
exports.SpansMetricResponseData = SpansMetricResponseData;
/**
 * @ignore
 */
SpansMetricResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SpansMetricResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "SpansMetricType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SpansMetricResponseData.js.map
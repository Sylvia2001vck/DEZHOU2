"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumMetricResponseData = void 0;
/**
 * The rum-based metric properties.
 */
class RumMetricResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumMetricResponseData.attributeTypeMap;
    }
}
exports.RumMetricResponseData = RumMetricResponseData;
/**
 * @ignore
 */
RumMetricResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RumMetricResponseAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "RumMetricType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RumMetricResponseData.js.map
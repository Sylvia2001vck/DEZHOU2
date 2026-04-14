"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumMetricResponse = void 0;
/**
 * The rum-based metric object.
 */
class RumMetricResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumMetricResponse.attributeTypeMap;
    }
}
exports.RumMetricResponse = RumMetricResponse;
/**
 * @ignore
 */
RumMetricResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RumMetricResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RumMetricResponse.js.map
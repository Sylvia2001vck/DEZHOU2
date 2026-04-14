"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansMetricResponse = void 0;
/**
 * The span-based metric object.
 */
class SpansMetricResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansMetricResponse.attributeTypeMap;
    }
}
exports.SpansMetricResponse = SpansMetricResponse;
/**
 * @ignore
 */
SpansMetricResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SpansMetricResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SpansMetricResponse.js.map
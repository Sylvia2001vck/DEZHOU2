"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumMetricUpdateRequest = void 0;
/**
 * The new rum-based metric body.
 */
class RumMetricUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumMetricUpdateRequest.attributeTypeMap;
    }
}
exports.RumMetricUpdateRequest = RumMetricUpdateRequest;
/**
 * @ignore
 */
RumMetricUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RumMetricUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RumMetricUpdateRequest.js.map
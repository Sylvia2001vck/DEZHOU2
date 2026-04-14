"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansMetricUpdateRequest = void 0;
/**
 * The new span-based metric body.
 */
class SpansMetricUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansMetricUpdateRequest.attributeTypeMap;
    }
}
exports.SpansMetricUpdateRequest = SpansMetricUpdateRequest;
/**
 * @ignore
 */
SpansMetricUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SpansMetricUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SpansMetricUpdateRequest.js.map
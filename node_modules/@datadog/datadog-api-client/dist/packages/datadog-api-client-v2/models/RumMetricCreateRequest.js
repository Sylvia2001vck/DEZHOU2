"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumMetricCreateRequest = void 0;
/**
 * The new rum-based metric body.
 */
class RumMetricCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumMetricCreateRequest.attributeTypeMap;
    }
}
exports.RumMetricCreateRequest = RumMetricCreateRequest;
/**
 * @ignore
 */
RumMetricCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RumMetricCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RumMetricCreateRequest.js.map
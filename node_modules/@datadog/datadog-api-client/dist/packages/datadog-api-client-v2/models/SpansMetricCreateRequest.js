"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansMetricCreateRequest = void 0;
/**
 * The new span-based metric body.
 */
class SpansMetricCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansMetricCreateRequest.attributeTypeMap;
    }
}
exports.SpansMetricCreateRequest = SpansMetricCreateRequest;
/**
 * @ignore
 */
SpansMetricCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "SpansMetricCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SpansMetricCreateRequest.js.map
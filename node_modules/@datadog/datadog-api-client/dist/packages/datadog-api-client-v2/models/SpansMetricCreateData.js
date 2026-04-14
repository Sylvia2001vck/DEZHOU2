"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansMetricCreateData = void 0;
/**
 * The new span-based metric properties.
 */
class SpansMetricCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansMetricCreateData.attributeTypeMap;
    }
}
exports.SpansMetricCreateData = SpansMetricCreateData;
/**
 * @ignore
 */
SpansMetricCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SpansMetricCreateAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "SpansMetricType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SpansMetricCreateData.js.map
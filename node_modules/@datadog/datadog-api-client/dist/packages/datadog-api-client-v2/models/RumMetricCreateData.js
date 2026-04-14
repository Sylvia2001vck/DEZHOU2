"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumMetricCreateData = void 0;
/**
 * The new rum-based metric properties.
 */
class RumMetricCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumMetricCreateData.attributeTypeMap;
    }
}
exports.RumMetricCreateData = RumMetricCreateData;
/**
 * @ignore
 */
RumMetricCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RumMetricCreateAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "RumMetricType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RumMetricCreateData.js.map
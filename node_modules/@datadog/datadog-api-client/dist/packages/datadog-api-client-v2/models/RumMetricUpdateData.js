"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumMetricUpdateData = void 0;
/**
 * The new rum-based metric properties.
 */
class RumMetricUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumMetricUpdateData.attributeTypeMap;
    }
}
exports.RumMetricUpdateData = RumMetricUpdateData;
/**
 * @ignore
 */
RumMetricUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "RumMetricUpdateAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=RumMetricUpdateData.js.map
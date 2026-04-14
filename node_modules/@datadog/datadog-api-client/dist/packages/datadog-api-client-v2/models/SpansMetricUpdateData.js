"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansMetricUpdateData = void 0;
/**
 * The new span-based metric properties.
 */
class SpansMetricUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansMetricUpdateData.attributeTypeMap;
    }
}
exports.SpansMetricUpdateData = SpansMetricUpdateData;
/**
 * @ignore
 */
SpansMetricUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "SpansMetricUpdateAttributes",
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
//# sourceMappingURL=SpansMetricUpdateData.js.map
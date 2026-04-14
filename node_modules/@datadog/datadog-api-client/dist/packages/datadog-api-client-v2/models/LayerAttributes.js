"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerAttributes = void 0;
/**
 * Describes key properties of a Layer, including rotation details, name, start/end times, and any restrictions.
 */
class LayerAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LayerAttributes.attributeTypeMap;
    }
}
exports.LayerAttributes = LayerAttributes;
/**
 * @ignore
 */
LayerAttributes.attributeTypeMap = {
    effectiveDate: {
        baseName: "effective_date",
        type: "Date",
        format: "date-time",
    },
    endDate: {
        baseName: "end_date",
        type: "Date",
        format: "date-time",
    },
    interval: {
        baseName: "interval",
        type: "LayerAttributesInterval",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    restrictions: {
        baseName: "restrictions",
        type: "Array<TimeRestriction>",
    },
    rotationStart: {
        baseName: "rotation_start",
        type: "Date",
        format: "date-time",
    },
    timeZone: {
        baseName: "time_zone",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LayerAttributes.js.map
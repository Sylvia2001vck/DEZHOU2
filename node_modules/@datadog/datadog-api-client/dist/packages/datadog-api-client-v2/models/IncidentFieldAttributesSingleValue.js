"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentFieldAttributesSingleValue = void 0;
/**
 * A field with a single value selected.
 */
class IncidentFieldAttributesSingleValue {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentFieldAttributesSingleValue.attributeTypeMap;
    }
}
exports.IncidentFieldAttributesSingleValue = IncidentFieldAttributesSingleValue;
/**
 * @ignore
 */
IncidentFieldAttributesSingleValue.attributeTypeMap = {
    type: {
        baseName: "type",
        type: "IncidentFieldAttributesSingleValueType",
    },
    value: {
        baseName: "value",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentFieldAttributesSingleValue.js.map
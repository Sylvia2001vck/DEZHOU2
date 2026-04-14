"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentFieldAttributesMultipleValue = void 0;
/**
 * A field with potentially multiple values selected.
 */
class IncidentFieldAttributesMultipleValue {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentFieldAttributesMultipleValue.attributeTypeMap;
    }
}
exports.IncidentFieldAttributesMultipleValue = IncidentFieldAttributesMultipleValue;
/**
 * @ignore
 */
IncidentFieldAttributesMultipleValue.attributeTypeMap = {
    type: {
        baseName: "type",
        type: "IncidentFieldAttributesValueType",
    },
    value: {
        baseName: "value",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentFieldAttributesMultipleValue.js.map
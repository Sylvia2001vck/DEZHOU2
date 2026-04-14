"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shift = void 0;
/**
 * An on-call shift with its associated data and relationships.
 */
class Shift {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Shift.attributeTypeMap;
    }
}
exports.Shift = Shift;
/**
 * @ignore
 */
Shift.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ShiftData",
    },
    included: {
        baseName: "included",
        type: "Array<ShiftIncluded>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Shift.js.map
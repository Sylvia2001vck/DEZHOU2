"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftData = void 0;
/**
 * Data for an on-call shift.
 */
class ShiftData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ShiftData.attributeTypeMap;
    }
}
exports.ShiftData = ShiftData;
/**
 * @ignore
 */
ShiftData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ShiftDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "ShiftDataRelationships",
    },
    type: {
        baseName: "type",
        type: "ShiftDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ShiftData.js.map
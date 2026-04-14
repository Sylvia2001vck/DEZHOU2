"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftDataRelationships = void 0;
/**
 * Relationships for an on-call shift.
 */
class ShiftDataRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ShiftDataRelationships.attributeTypeMap;
    }
}
exports.ShiftDataRelationships = ShiftDataRelationships;
/**
 * @ignore
 */
ShiftDataRelationships.attributeTypeMap = {
    user: {
        baseName: "user",
        type: "ShiftDataRelationshipsUser",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ShiftDataRelationships.js.map
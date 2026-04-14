"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftDataRelationshipsUser = void 0;
/**
 * Defines the relationship between a shift and the user who is working that shift.
 */
class ShiftDataRelationshipsUser {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ShiftDataRelationshipsUser.attributeTypeMap;
    }
}
exports.ShiftDataRelationshipsUser = ShiftDataRelationshipsUser;
/**
 * @ignore
 */
ShiftDataRelationshipsUser.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ShiftDataRelationshipsUserData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ShiftDataRelationshipsUser.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftDataRelationshipsUserData = void 0;
/**
 * Represents a reference to the user assigned to this shift, containing the user's ID and resource type.
 */
class ShiftDataRelationshipsUserData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ShiftDataRelationshipsUserData.attributeTypeMap;
    }
}
exports.ShiftDataRelationshipsUserData = ShiftDataRelationshipsUserData;
/**
 * @ignore
 */
ShiftDataRelationshipsUserData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ShiftDataRelationshipsUserDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ShiftDataRelationshipsUserData.js.map
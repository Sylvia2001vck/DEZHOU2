"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleMemberRelationshipsUserData = void 0;
/**
 * Points to the user data associated with this schedule member, including an ID and type.
 */
class ScheduleMemberRelationshipsUserData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScheduleMemberRelationshipsUserData.attributeTypeMap;
    }
}
exports.ScheduleMemberRelationshipsUserData = ScheduleMemberRelationshipsUserData;
/**
 * @ignore
 */
ScheduleMemberRelationshipsUserData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ScheduleMemberRelationshipsUserDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScheduleMemberRelationshipsUserData.js.map
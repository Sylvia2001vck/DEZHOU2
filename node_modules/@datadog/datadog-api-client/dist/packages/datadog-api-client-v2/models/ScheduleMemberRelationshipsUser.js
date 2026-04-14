"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleMemberRelationshipsUser = void 0;
/**
 * Wraps the user data reference for a schedule member.
 */
class ScheduleMemberRelationshipsUser {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScheduleMemberRelationshipsUser.attributeTypeMap;
    }
}
exports.ScheduleMemberRelationshipsUser = ScheduleMemberRelationshipsUser;
/**
 * @ignore
 */
ScheduleMemberRelationshipsUser.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ScheduleMemberRelationshipsUserData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScheduleMemberRelationshipsUser.js.map
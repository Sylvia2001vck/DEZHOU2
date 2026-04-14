"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleMemberRelationships = void 0;
/**
 * Defines relationships for a schedule member, primarily referencing a single user.
 */
class ScheduleMemberRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScheduleMemberRelationships.attributeTypeMap;
    }
}
exports.ScheduleMemberRelationships = ScheduleMemberRelationships;
/**
 * @ignore
 */
ScheduleMemberRelationships.attributeTypeMap = {
    user: {
        baseName: "user",
        type: "ScheduleMemberRelationshipsUser",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScheduleMemberRelationships.js.map
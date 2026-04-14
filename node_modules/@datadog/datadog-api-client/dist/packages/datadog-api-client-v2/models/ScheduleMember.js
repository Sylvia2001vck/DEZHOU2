"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleMember = void 0;
/**
 * Represents a single member entry in a schedule, referencing a specific user.
 */
class ScheduleMember {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScheduleMember.attributeTypeMap;
    }
}
exports.ScheduleMember = ScheduleMember;
/**
 * @ignore
 */
ScheduleMember.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "ScheduleMemberRelationships",
    },
    type: {
        baseName: "type",
        type: "ScheduleMemberType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScheduleMember.js.map
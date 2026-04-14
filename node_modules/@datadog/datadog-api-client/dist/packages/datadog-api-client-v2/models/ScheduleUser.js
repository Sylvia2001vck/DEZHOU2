"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleUser = void 0;
/**
 * Represents a user object in the context of a schedule, including their `id`, type, and basic attributes.
 */
class ScheduleUser {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScheduleUser.attributeTypeMap;
    }
}
exports.ScheduleUser = ScheduleUser;
/**
 * @ignore
 */
ScheduleUser.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ScheduleUserAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "ScheduleUserType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScheduleUser.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleUserAttributes = void 0;
/**
 * Provides basic user information for a schedule, including a name and email address.
 */
class ScheduleUserAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScheduleUserAttributes.attributeTypeMap;
    }
}
exports.ScheduleUserAttributes = ScheduleUserAttributes;
/**
 * @ignore
 */
ScheduleUserAttributes.attributeTypeMap = {
    email: {
        baseName: "email",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "UserAttributesStatus",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScheduleUserAttributes.js.map
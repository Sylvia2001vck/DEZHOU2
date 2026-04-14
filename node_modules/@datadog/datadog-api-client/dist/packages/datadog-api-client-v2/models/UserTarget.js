"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTarget = void 0;
/**
 * Represents a user target for an escalation policy step, including the user's ID and resource type.
 */
class UserTarget {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserTarget.attributeTypeMap;
    }
}
exports.UserTarget = UserTarget;
/**
 * @ignore
 */
UserTarget.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "UserTargetType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UserTarget.js.map
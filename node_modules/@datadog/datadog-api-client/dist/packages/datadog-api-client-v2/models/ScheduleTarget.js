"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleTarget = void 0;
/**
 * Represents a schedule target for an escalation policy step, including its ID and resource type. This is a shortcut for a configured schedule target with position set to 'current'.
 */
class ScheduleTarget {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScheduleTarget.attributeTypeMap;
    }
}
exports.ScheduleTarget = ScheduleTarget;
/**
 * @ignore
 */
ScheduleTarget.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ScheduleTargetType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScheduleTarget.js.map
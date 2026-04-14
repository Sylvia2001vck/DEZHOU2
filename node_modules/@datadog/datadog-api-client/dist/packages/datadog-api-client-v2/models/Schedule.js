"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule = void 0;
/**
 * Top-level container for a schedule object, including both the `data` payload and any related `included` resources (such as teams, layers, or members).
 */
class Schedule {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Schedule.attributeTypeMap;
    }
}
exports.Schedule = Schedule;
/**
 * @ignore
 */
Schedule.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ScheduleData",
    },
    included: {
        baseName: "included",
        type: "Array<ScheduleDataIncludedItem>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Schedule.js.map
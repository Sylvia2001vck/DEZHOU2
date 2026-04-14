"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeRestriction = void 0;
/**
 * Defines a single time restriction rule with start and end times and the applicable weekdays.
 */
class TimeRestriction {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TimeRestriction.attributeTypeMap;
    }
}
exports.TimeRestriction = TimeRestriction;
/**
 * @ignore
 */
TimeRestriction.attributeTypeMap = {
    endDay: {
        baseName: "end_day",
        type: "Weekday",
    },
    endTime: {
        baseName: "end_time",
        type: "string",
    },
    startDay: {
        baseName: "start_day",
        type: "Weekday",
    },
    startTime: {
        baseName: "start_time",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TimeRestriction.js.map
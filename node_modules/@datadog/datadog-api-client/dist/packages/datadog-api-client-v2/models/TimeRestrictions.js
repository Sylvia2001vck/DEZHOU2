"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeRestrictions = void 0;
/**
 * Holds time zone information and a list of time restrictions for a routing rule.
 */
class TimeRestrictions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TimeRestrictions.attributeTypeMap;
    }
}
exports.TimeRestrictions = TimeRestrictions;
/**
 * @ignore
 */
TimeRestrictions.attributeTypeMap = {
    restrictions: {
        baseName: "restrictions",
        type: "Array<TimeRestriction>",
        required: true,
    },
    timeZone: {
        baseName: "time_zone",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TimeRestrictions.js.map
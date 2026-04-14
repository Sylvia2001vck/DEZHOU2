"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetScheduleCreateAttributes = void 0;
/**
 * Attributes for creating a new schedule.
 */
class FleetScheduleCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetScheduleCreateAttributes.attributeTypeMap;
    }
}
exports.FleetScheduleCreateAttributes = FleetScheduleCreateAttributes;
/**
 * @ignore
 */
FleetScheduleCreateAttributes.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    query: {
        baseName: "query",
        type: "string",
        required: true,
    },
    rule: {
        baseName: "rule",
        type: "FleetScheduleRecurrenceRule",
        required: true,
    },
    status: {
        baseName: "status",
        type: "FleetScheduleStatus",
    },
    versionToLatest: {
        baseName: "version_to_latest",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetScheduleCreateAttributes.js.map
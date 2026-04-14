"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleCreateRequestDataAttributesLayersItems = void 0;
/**
 * Describes a schedule layer, including rotation intervals, members, restrictions, and timeline settings.
 */
class ScheduleCreateRequestDataAttributesLayersItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScheduleCreateRequestDataAttributesLayersItems.attributeTypeMap;
    }
}
exports.ScheduleCreateRequestDataAttributesLayersItems = ScheduleCreateRequestDataAttributesLayersItems;
/**
 * @ignore
 */
ScheduleCreateRequestDataAttributesLayersItems.attributeTypeMap = {
    effectiveDate: {
        baseName: "effective_date",
        type: "Date",
        required: true,
        format: "date-time",
    },
    endDate: {
        baseName: "end_date",
        type: "Date",
        format: "date-time",
    },
    interval: {
        baseName: "interval",
        type: "LayerAttributesInterval",
        required: true,
    },
    members: {
        baseName: "members",
        type: "Array<ScheduleRequestDataAttributesLayersItemsMembersItems>",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    restrictions: {
        baseName: "restrictions",
        type: "Array<TimeRestriction>",
    },
    rotationStart: {
        baseName: "rotation_start",
        type: "Date",
        required: true,
        format: "date-time",
    },
    timeZone: {
        baseName: "time_zone",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScheduleCreateRequestDataAttributesLayersItems.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleUpdateRequestDataAttributesLayersItems = void 0;
/**
 * Represents a layer within a schedule update, including rotation details, members,
 * and optional restrictions.
 */
class ScheduleUpdateRequestDataAttributesLayersItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScheduleUpdateRequestDataAttributesLayersItems.attributeTypeMap;
    }
}
exports.ScheduleUpdateRequestDataAttributesLayersItems = ScheduleUpdateRequestDataAttributesLayersItems;
/**
 * @ignore
 */
ScheduleUpdateRequestDataAttributesLayersItems.attributeTypeMap = {
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
    id: {
        baseName: "id",
        type: "string",
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
//# sourceMappingURL=ScheduleUpdateRequestDataAttributesLayersItems.js.map
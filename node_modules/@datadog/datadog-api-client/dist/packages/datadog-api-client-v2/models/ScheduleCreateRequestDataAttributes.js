"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleCreateRequestDataAttributes = void 0;
/**
 * Describes the main attributes for creating a new schedule, including name, layers, and time zone.
 */
class ScheduleCreateRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScheduleCreateRequestDataAttributes.attributeTypeMap;
    }
}
exports.ScheduleCreateRequestDataAttributes = ScheduleCreateRequestDataAttributes;
/**
 * @ignore
 */
ScheduleCreateRequestDataAttributes.attributeTypeMap = {
    layers: {
        baseName: "layers",
        type: "Array<ScheduleCreateRequestDataAttributesLayersItems>",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
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
//# sourceMappingURL=ScheduleCreateRequestDataAttributes.js.map
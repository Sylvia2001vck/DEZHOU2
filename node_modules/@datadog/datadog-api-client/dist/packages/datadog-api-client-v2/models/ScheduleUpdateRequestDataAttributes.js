"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleUpdateRequestDataAttributes = void 0;
/**
 * Defines the updatable attributes for a schedule, such as name, time zone, and layers.
 */
class ScheduleUpdateRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScheduleUpdateRequestDataAttributes.attributeTypeMap;
    }
}
exports.ScheduleUpdateRequestDataAttributes = ScheduleUpdateRequestDataAttributes;
/**
 * @ignore
 */
ScheduleUpdateRequestDataAttributes.attributeTypeMap = {
    layers: {
        baseName: "layers",
        type: "Array<ScheduleUpdateRequestDataAttributesLayersItems>",
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
//# sourceMappingURL=ScheduleUpdateRequestDataAttributes.js.map
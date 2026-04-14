"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleCreateRequestData = void 0;
/**
 * The core data wrapper for creating a schedule, encompassing attributes, relationships, and the resource type.
 */
class ScheduleCreateRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScheduleCreateRequestData.attributeTypeMap;
    }
}
exports.ScheduleCreateRequestData = ScheduleCreateRequestData;
/**
 * @ignore
 */
ScheduleCreateRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ScheduleCreateRequestDataAttributes",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "ScheduleCreateRequestDataRelationships",
    },
    type: {
        baseName: "type",
        type: "ScheduleCreateRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScheduleCreateRequestData.js.map
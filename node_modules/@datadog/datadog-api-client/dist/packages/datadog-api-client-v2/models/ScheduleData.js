"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleData = void 0;
/**
 * Represents the primary data object for a schedule, linking attributes and relationships.
 */
class ScheduleData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScheduleData.attributeTypeMap;
    }
}
exports.ScheduleData = ScheduleData;
/**
 * @ignore
 */
ScheduleData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ScheduleDataAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "ScheduleDataRelationships",
    },
    type: {
        baseName: "type",
        type: "ScheduleDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScheduleData.js.map
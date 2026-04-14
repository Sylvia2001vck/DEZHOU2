"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleUpdateRequestData = void 0;
/**
 * Contains all data needed to update an existing schedule, including its attributes (such as name and time zone) and any relationships to teams.
 */
class ScheduleUpdateRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScheduleUpdateRequestData.attributeTypeMap;
    }
}
exports.ScheduleUpdateRequestData = ScheduleUpdateRequestData;
/**
 * @ignore
 */
ScheduleUpdateRequestData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ScheduleUpdateRequestDataAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "ScheduleUpdateRequestDataRelationships",
    },
    type: {
        baseName: "type",
        type: "ScheduleUpdateRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScheduleUpdateRequestData.js.map
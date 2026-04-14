"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleDataRelationshipsLayersDataItems = void 0;
/**
 * Relates a layer to this schedule, identified by `id` and `type` (must be `layers`).
 */
class ScheduleDataRelationshipsLayersDataItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScheduleDataRelationshipsLayersDataItems.attributeTypeMap;
    }
}
exports.ScheduleDataRelationshipsLayersDataItems = ScheduleDataRelationshipsLayersDataItems;
/**
 * @ignore
 */
ScheduleDataRelationshipsLayersDataItems.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "ScheduleDataRelationshipsLayersDataItemsType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScheduleDataRelationshipsLayersDataItems.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleDataRelationshipsLayers = void 0;
/**
 * Associates layers with this schedule in a data structure.
 */
class ScheduleDataRelationshipsLayers {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScheduleDataRelationshipsLayers.attributeTypeMap;
    }
}
exports.ScheduleDataRelationshipsLayers = ScheduleDataRelationshipsLayers;
/**
 * @ignore
 */
ScheduleDataRelationshipsLayers.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<ScheduleDataRelationshipsLayersDataItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScheduleDataRelationshipsLayers.js.map
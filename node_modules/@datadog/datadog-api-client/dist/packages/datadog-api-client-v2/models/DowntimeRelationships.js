"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DowntimeRelationships = void 0;
/**
 * All relationships associated with downtime.
 */
class DowntimeRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DowntimeRelationships.attributeTypeMap;
    }
}
exports.DowntimeRelationships = DowntimeRelationships;
/**
 * @ignore
 */
DowntimeRelationships.attributeTypeMap = {
    createdBy: {
        baseName: "created_by",
        type: "DowntimeRelationshipsCreatedBy",
    },
    monitor: {
        baseName: "monitor",
        type: "DowntimeRelationshipsMonitor",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DowntimeRelationships.js.map
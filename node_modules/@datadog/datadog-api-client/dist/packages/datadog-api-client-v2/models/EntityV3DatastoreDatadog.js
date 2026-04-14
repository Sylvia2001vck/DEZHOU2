"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityV3DatastoreDatadog = void 0;
/**
 * Datadog product integrations for the datastore entity.
 */
class EntityV3DatastoreDatadog {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityV3DatastoreDatadog.attributeTypeMap;
    }
}
exports.EntityV3DatastoreDatadog = EntityV3DatastoreDatadog;
/**
 * @ignore
 */
EntityV3DatastoreDatadog.attributeTypeMap = {
    events: {
        baseName: "events",
        type: "Array<EntityV3DatadogEventItem>",
    },
    logs: {
        baseName: "logs",
        type: "Array<EntityV3DatadogLogItem>",
    },
    performanceData: {
        baseName: "performanceData",
        type: "EntityV3DatadogPerformance",
    },
};
//# sourceMappingURL=EntityV3DatastoreDatadog.js.map
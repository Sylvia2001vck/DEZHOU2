"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityV3QueueDatadog = void 0;
/**
 * Datadog product integrations for the datastore entity.
 */
class EntityV3QueueDatadog {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityV3QueueDatadog.attributeTypeMap;
    }
}
exports.EntityV3QueueDatadog = EntityV3QueueDatadog;
/**
 * @ignore
 */
EntityV3QueueDatadog.attributeTypeMap = {
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
//# sourceMappingURL=EntityV3QueueDatadog.js.map
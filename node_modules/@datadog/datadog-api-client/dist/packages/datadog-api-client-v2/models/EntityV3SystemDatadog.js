"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityV3SystemDatadog = void 0;
/**
 * Datadog product integrations for the service entity.
 */
class EntityV3SystemDatadog {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityV3SystemDatadog.attributeTypeMap;
    }
}
exports.EntityV3SystemDatadog = EntityV3SystemDatadog;
/**
 * @ignore
 */
EntityV3SystemDatadog.attributeTypeMap = {
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
    pipelines: {
        baseName: "pipelines",
        type: "EntityV3DatadogPipelines",
    },
};
//# sourceMappingURL=EntityV3SystemDatadog.js.map
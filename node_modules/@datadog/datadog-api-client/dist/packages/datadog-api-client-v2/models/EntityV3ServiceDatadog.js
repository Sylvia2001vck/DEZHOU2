"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityV3ServiceDatadog = void 0;
/**
 * Datadog product integrations for the service entity.
 */
class EntityV3ServiceDatadog {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityV3ServiceDatadog.attributeTypeMap;
    }
}
exports.EntityV3ServiceDatadog = EntityV3ServiceDatadog;
/**
 * @ignore
 */
EntityV3ServiceDatadog.attributeTypeMap = {
    codeLocations: {
        baseName: "codeLocations",
        type: "Array<EntityV3DatadogCodeLocationItem>",
    },
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
//# sourceMappingURL=EntityV3ServiceDatadog.js.map
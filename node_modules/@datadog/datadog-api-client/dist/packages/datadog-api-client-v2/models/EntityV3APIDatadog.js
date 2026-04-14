"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityV3APIDatadog = void 0;
/**
 * Datadog product integrations for the API entity.
 */
class EntityV3APIDatadog {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityV3APIDatadog.attributeTypeMap;
    }
}
exports.EntityV3APIDatadog = EntityV3APIDatadog;
/**
 * @ignore
 */
EntityV3APIDatadog.attributeTypeMap = {
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
//# sourceMappingURL=EntityV3APIDatadog.js.map
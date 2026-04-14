"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationServiceNowSyncConfig = void 0;
class IntegrationServiceNowSyncConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IntegrationServiceNowSyncConfig.attributeTypeMap;
    }
}
exports.IntegrationServiceNowSyncConfig = IntegrationServiceNowSyncConfig;
/**
 * @ignore
 */
IntegrationServiceNowSyncConfig.attributeTypeMap = {
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    properties: {
        baseName: "properties",
        type: "IntegrationServiceNowSyncConfig139772721534496",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IntegrationServiceNowSyncConfig.js.map
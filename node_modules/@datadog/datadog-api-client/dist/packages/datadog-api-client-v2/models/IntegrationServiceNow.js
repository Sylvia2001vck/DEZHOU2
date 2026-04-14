"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationServiceNow = void 0;
/**
 * ServiceNow integration settings
 */
class IntegrationServiceNow {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IntegrationServiceNow.attributeTypeMap;
    }
}
exports.IntegrationServiceNow = IntegrationServiceNow;
/**
 * @ignore
 */
IntegrationServiceNow.attributeTypeMap = {
    assignmentGroup: {
        baseName: "assignment_group",
        type: "string",
    },
    autoCreation: {
        baseName: "auto_creation",
        type: "IntegrationServiceNowAutoCreation",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    instanceName: {
        baseName: "instance_name",
        type: "string",
    },
    syncConfig: {
        baseName: "sync_config",
        type: "IntegrationServiceNowSyncConfig",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IntegrationServiceNow.js.map
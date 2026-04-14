"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationServiceNowSyncConfig139772721534496 = void 0;
class IntegrationServiceNowSyncConfig139772721534496 {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IntegrationServiceNowSyncConfig139772721534496.attributeTypeMap;
    }
}
exports.IntegrationServiceNowSyncConfig139772721534496 = IntegrationServiceNowSyncConfig139772721534496;
/**
 * @ignore
 */
IntegrationServiceNowSyncConfig139772721534496.attributeTypeMap = {
    comments: {
        baseName: "comments",
        type: "SyncProperty",
    },
    priority: {
        baseName: "priority",
        type: "IntegrationServiceNowSyncConfigPriority",
    },
    status: {
        baseName: "status",
        type: "SyncPropertyWithMapping",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IntegrationServiceNowSyncConfig139772721534496.js.map
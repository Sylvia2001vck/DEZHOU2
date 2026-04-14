"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationServiceNowSyncConfigPriority = void 0;
class IntegrationServiceNowSyncConfigPriority {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IntegrationServiceNowSyncConfigPriority.attributeTypeMap;
    }
}
exports.IntegrationServiceNowSyncConfigPriority = IntegrationServiceNowSyncConfigPriority;
/**
 * @ignore
 */
IntegrationServiceNowSyncConfigPriority.attributeTypeMap = {
    impactMapping: {
        baseName: "impact_mapping",
        type: "{ [key: string]: string; }",
    },
    syncType: {
        baseName: "sync_type",
        type: "string",
    },
    urgencyMapping: {
        baseName: "urgency_mapping",
        type: "{ [key: string]: string; }",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IntegrationServiceNowSyncConfigPriority.js.map
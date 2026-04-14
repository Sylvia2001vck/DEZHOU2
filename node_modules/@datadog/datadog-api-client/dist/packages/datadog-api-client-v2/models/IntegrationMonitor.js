"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationMonitor = void 0;
/**
 * Monitor integration settings
 */
class IntegrationMonitor {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IntegrationMonitor.attributeTypeMap;
    }
}
exports.IntegrationMonitor = IntegrationMonitor;
/**
 * @ignore
 */
IntegrationMonitor.attributeTypeMap = {
    autoResolveEnabled: {
        baseName: "auto_resolve_enabled",
        type: "boolean",
    },
    caseTypeId: {
        baseName: "case_type_id",
        type: "string",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    handle: {
        baseName: "handle",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IntegrationMonitor.js.map
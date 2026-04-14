"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncPropertyWithMapping = void 0;
/**
 * Sync property with mapping configuration
 */
class SyncPropertyWithMapping {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyncPropertyWithMapping.attributeTypeMap;
    }
}
exports.SyncPropertyWithMapping = SyncPropertyWithMapping;
/**
 * @ignore
 */
SyncPropertyWithMapping.attributeTypeMap = {
    mapping: {
        baseName: "mapping",
        type: "{ [key: string]: string; }",
    },
    nameMapping: {
        baseName: "name_mapping",
        type: "{ [key: string]: string; }",
    },
    syncType: {
        baseName: "sync_type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyncPropertyWithMapping.js.map
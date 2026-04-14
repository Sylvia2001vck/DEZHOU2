"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncProperty = void 0;
/**
 * Sync property configuration
 */
class SyncProperty {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyncProperty.attributeTypeMap;
    }
}
exports.SyncProperty = SyncProperty;
/**
 * @ignore
 */
SyncProperty.attributeTypeMap = {
    syncType: {
        baseName: "sync_type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyncProperty.js.map
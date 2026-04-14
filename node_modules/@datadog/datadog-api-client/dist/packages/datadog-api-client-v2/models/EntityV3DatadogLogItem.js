"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityV3DatadogLogItem = void 0;
/**
 * Log association item.
 */
class EntityV3DatadogLogItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityV3DatadogLogItem.attributeTypeMap;
    }
}
exports.EntityV3DatadogLogItem = EntityV3DatadogLogItem;
/**
 * @ignore
 */
EntityV3DatadogLogItem.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
    },
    query: {
        baseName: "query",
        type: "string",
    },
};
//# sourceMappingURL=EntityV3DatadogLogItem.js.map
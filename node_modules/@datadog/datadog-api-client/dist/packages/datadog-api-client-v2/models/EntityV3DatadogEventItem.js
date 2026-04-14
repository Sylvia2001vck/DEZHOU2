"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityV3DatadogEventItem = void 0;
/**
 * Events association item.
 */
class EntityV3DatadogEventItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityV3DatadogEventItem.attributeTypeMap;
    }
}
exports.EntityV3DatadogEventItem = EntityV3DatadogEventItem;
/**
 * @ignore
 */
EntityV3DatadogEventItem.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
    },
    query: {
        baseName: "query",
        type: "string",
    },
};
//# sourceMappingURL=EntityV3DatadogEventItem.js.map
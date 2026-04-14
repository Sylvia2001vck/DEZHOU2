"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityV3DatadogCodeLocationItem = void 0;
/**
 * Code location item.
 */
class EntityV3DatadogCodeLocationItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityV3DatadogCodeLocationItem.attributeTypeMap;
    }
}
exports.EntityV3DatadogCodeLocationItem = EntityV3DatadogCodeLocationItem;
/**
 * @ignore
 */
EntityV3DatadogCodeLocationItem.attributeTypeMap = {
    paths: {
        baseName: "paths",
        type: "Array<string>",
    },
    repositoryUrl: {
        baseName: "repositoryURL",
        type: "string",
    },
};
//# sourceMappingURL=EntityV3DatadogCodeLocationItem.js.map
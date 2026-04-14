"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityV3DatadogPerformance = void 0;
/**
 * Performance stats association.
 */
class EntityV3DatadogPerformance {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityV3DatadogPerformance.attributeTypeMap;
    }
}
exports.EntityV3DatadogPerformance = EntityV3DatadogPerformance;
/**
 * @ignore
 */
EntityV3DatadogPerformance.attributeTypeMap = {
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
};
//# sourceMappingURL=EntityV3DatadogPerformance.js.map
"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityV3DatadogPipelines = void 0;
/**
 * CI Pipelines association.
 */
class EntityV3DatadogPipelines {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityV3DatadogPipelines.attributeTypeMap;
    }
}
exports.EntityV3DatadogPipelines = EntityV3DatadogPipelines;
/**
 * @ignore
 */
EntityV3DatadogPipelines.attributeTypeMap = {
    fingerprints: {
        baseName: "fingerprints",
        type: "Array<string>",
    },
};
//# sourceMappingURL=EntityV3DatadogPipelines.js.map
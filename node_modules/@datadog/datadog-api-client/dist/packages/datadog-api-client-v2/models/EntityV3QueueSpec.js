"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityV3QueueSpec = void 0;
/**
 * The definition of Entity V3 Queue Spec object.
 */
class EntityV3QueueSpec {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityV3QueueSpec.attributeTypeMap;
    }
}
exports.EntityV3QueueSpec = EntityV3QueueSpec;
/**
 * @ignore
 */
EntityV3QueueSpec.attributeTypeMap = {
    componentOf: {
        baseName: "componentOf",
        type: "Array<string>",
    },
    lifecycle: {
        baseName: "lifecycle",
        type: "string",
    },
    tier: {
        baseName: "tier",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "string",
    },
};
//# sourceMappingURL=EntityV3QueueSpec.js.map
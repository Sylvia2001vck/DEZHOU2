"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityV3ServiceSpec = void 0;
/**
 * The definition of Entity V3 Service Spec object.
 */
class EntityV3ServiceSpec {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityV3ServiceSpec.attributeTypeMap;
    }
}
exports.EntityV3ServiceSpec = EntityV3ServiceSpec;
/**
 * @ignore
 */
EntityV3ServiceSpec.attributeTypeMap = {
    componentOf: {
        baseName: "componentOf",
        type: "Array<string>",
    },
    dependsOn: {
        baseName: "dependsOn",
        type: "Array<string>",
    },
    languages: {
        baseName: "languages",
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
//# sourceMappingURL=EntityV3ServiceSpec.js.map
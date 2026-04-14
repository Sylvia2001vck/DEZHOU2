"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityV3SystemSpec = void 0;
/**
 * The definition of Entity V3 System Spec object.
 */
class EntityV3SystemSpec {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityV3SystemSpec.attributeTypeMap;
    }
}
exports.EntityV3SystemSpec = EntityV3SystemSpec;
/**
 * @ignore
 */
EntityV3SystemSpec.attributeTypeMap = {
    components: {
        baseName: "components",
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
};
//# sourceMappingURL=EntityV3SystemSpec.js.map
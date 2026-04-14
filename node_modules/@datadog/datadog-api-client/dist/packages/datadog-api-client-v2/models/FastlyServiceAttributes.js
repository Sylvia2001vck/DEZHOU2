"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastlyServiceAttributes = void 0;
/**
 * Attributes object for Fastly service requests.
 */
class FastlyServiceAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FastlyServiceAttributes.attributeTypeMap;
    }
}
exports.FastlyServiceAttributes = FastlyServiceAttributes;
/**
 * @ignore
 */
FastlyServiceAttributes.attributeTypeMap = {
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FastlyServiceAttributes.js.map
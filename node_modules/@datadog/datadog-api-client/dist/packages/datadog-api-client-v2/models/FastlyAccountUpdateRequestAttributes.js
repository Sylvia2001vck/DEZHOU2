"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FastlyAccountUpdateRequestAttributes = void 0;
/**
 * Attributes object for updating a Fastly account.
 */
class FastlyAccountUpdateRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FastlyAccountUpdateRequestAttributes.attributeTypeMap;
    }
}
exports.FastlyAccountUpdateRequestAttributes = FastlyAccountUpdateRequestAttributes;
/**
 * @ignore
 */
FastlyAccountUpdateRequestAttributes.attributeTypeMap = {
    apiKey: {
        baseName: "api_key",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FastlyAccountUpdateRequestAttributes.js.map
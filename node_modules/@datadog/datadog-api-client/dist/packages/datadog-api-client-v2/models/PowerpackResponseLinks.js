"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerpackResponseLinks = void 0;
/**
 * Links attributes.
 */
class PowerpackResponseLinks {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PowerpackResponseLinks.attributeTypeMap;
    }
}
exports.PowerpackResponseLinks = PowerpackResponseLinks;
/**
 * @ignore
 */
PowerpackResponseLinks.attributeTypeMap = {
    first: {
        baseName: "first",
        type: "string",
    },
    last: {
        baseName: "last",
        type: "string",
    },
    next: {
        baseName: "next",
        type: "string",
    },
    prev: {
        baseName: "prev",
        type: "string",
    },
    self: {
        baseName: "self",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PowerpackResponseLinks.js.map
"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpansListResponseLinks = void 0;
/**
 * Links attributes.
 */
class SpansListResponseLinks {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SpansListResponseLinks.attributeTypeMap;
    }
}
exports.SpansListResponseLinks = SpansListResponseLinks;
/**
 * @ignore
 */
SpansListResponseLinks.attributeTypeMap = {
    next: {
        baseName: "next",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SpansListResponseLinks.js.map
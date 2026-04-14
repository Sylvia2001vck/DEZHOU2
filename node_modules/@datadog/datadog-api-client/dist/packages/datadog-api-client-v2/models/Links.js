"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Links = void 0;
/**
 * The JSON:API links related to pagination.
 */
class Links {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return Links.attributeTypeMap;
    }
}
exports.Links = Links;
/**
 * @ignore
 */
Links.attributeTypeMap = {
    first: {
        baseName: "first",
        type: "string",
        required: true,
    },
    last: {
        baseName: "last",
        type: "string",
        required: true,
    },
    next: {
        baseName: "next",
        type: "string",
    },
    previous: {
        baseName: "previous",
        type: "string",
    },
    self: {
        baseName: "self",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=Links.js.map
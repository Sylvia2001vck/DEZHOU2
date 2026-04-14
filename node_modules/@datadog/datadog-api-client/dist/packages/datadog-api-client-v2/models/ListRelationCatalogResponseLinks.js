"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRelationCatalogResponseLinks = void 0;
/**
 * List relation response links.
 */
class ListRelationCatalogResponseLinks {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListRelationCatalogResponseLinks.attributeTypeMap;
    }
}
exports.ListRelationCatalogResponseLinks = ListRelationCatalogResponseLinks;
/**
 * @ignore
 */
ListRelationCatalogResponseLinks.attributeTypeMap = {
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
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListRelationCatalogResponseLinks.js.map
"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListEntityCatalogResponseLinks = void 0;
/**
 * List entity response links.
 */
class ListEntityCatalogResponseLinks {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListEntityCatalogResponseLinks.attributeTypeMap;
    }
}
exports.ListEntityCatalogResponseLinks = ListEntityCatalogResponseLinks;
/**
 * @ignore
 */
ListEntityCatalogResponseLinks.attributeTypeMap = {
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
//# sourceMappingURL=ListEntityCatalogResponseLinks.js.map
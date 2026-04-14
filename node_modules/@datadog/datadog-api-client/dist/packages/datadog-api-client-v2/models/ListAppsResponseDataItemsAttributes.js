"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAppsResponseDataItemsAttributes = void 0;
/**
 * Basic information about the app such as name, description, and tags.
 */
class ListAppsResponseDataItemsAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListAppsResponseDataItemsAttributes.attributeTypeMap;
    }
}
exports.ListAppsResponseDataItemsAttributes = ListAppsResponseDataItemsAttributes;
/**
 * @ignore
 */
ListAppsResponseDataItemsAttributes.attributeTypeMap = {
    description: {
        baseName: "description",
        type: "string",
    },
    favorite: {
        baseName: "favorite",
        type: "boolean",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    selfService: {
        baseName: "selfService",
        type: "boolean",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListAppsResponseDataItemsAttributes.js.map
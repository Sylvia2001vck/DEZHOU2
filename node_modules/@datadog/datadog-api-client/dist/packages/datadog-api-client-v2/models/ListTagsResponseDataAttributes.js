"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTagsResponseDataAttributes = void 0;
/**
 * The definition of ListTagsResponseDataAttributes object.
 */
class ListTagsResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListTagsResponseDataAttributes.attributeTypeMap;
    }
}
exports.ListTagsResponseDataAttributes = ListTagsResponseDataAttributes;
/**
 * @ignore
 */
ListTagsResponseDataAttributes.attributeTypeMap = {
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListTagsResponseDataAttributes.js.map
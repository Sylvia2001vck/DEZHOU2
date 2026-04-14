"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAPIsResponseDataAttributes = void 0;
/**
 * Attributes for `ListAPIsResponseData`.
 */
class ListAPIsResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListAPIsResponseDataAttributes.attributeTypeMap;
    }
}
exports.ListAPIsResponseDataAttributes = ListAPIsResponseDataAttributes;
/**
 * @ignore
 */
ListAPIsResponseDataAttributes.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListAPIsResponseDataAttributes.js.map
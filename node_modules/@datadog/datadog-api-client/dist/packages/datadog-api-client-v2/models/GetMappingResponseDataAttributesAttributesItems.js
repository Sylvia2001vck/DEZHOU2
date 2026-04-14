"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMappingResponseDataAttributesAttributesItems = void 0;
class GetMappingResponseDataAttributesAttributesItems {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetMappingResponseDataAttributesAttributesItems.attributeTypeMap;
    }
}
exports.GetMappingResponseDataAttributesAttributesItems = GetMappingResponseDataAttributesAttributesItems;
/**
 * @ignore
 */
GetMappingResponseDataAttributesAttributesItems.attributeTypeMap = {
    attribute: {
        baseName: "attribute",
        type: "string",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    displayName: {
        baseName: "display_name",
        type: "string",
    },
    groups: {
        baseName: "groups",
        type: "Array<string>",
    },
    isCustom: {
        baseName: "is_custom",
        type: "boolean",
    },
    type: {
        baseName: "type",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GetMappingResponseDataAttributesAttributesItems.js.map
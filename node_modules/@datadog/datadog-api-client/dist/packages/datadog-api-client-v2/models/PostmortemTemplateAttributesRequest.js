"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostmortemTemplateAttributesRequest = void 0;
class PostmortemTemplateAttributesRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PostmortemTemplateAttributesRequest.attributeTypeMap;
    }
}
exports.PostmortemTemplateAttributesRequest = PostmortemTemplateAttributesRequest;
/**
 * @ignore
 */
PostmortemTemplateAttributesRequest.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PostmortemTemplateAttributesRequest.js.map
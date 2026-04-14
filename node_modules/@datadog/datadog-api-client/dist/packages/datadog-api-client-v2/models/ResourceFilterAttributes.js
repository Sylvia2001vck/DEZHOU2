"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceFilterAttributes = void 0;
/**
 * Attributes of a resource filter.
 */
class ResourceFilterAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ResourceFilterAttributes.attributeTypeMap;
    }
}
exports.ResourceFilterAttributes = ResourceFilterAttributes;
/**
 * @ignore
 */
ResourceFilterAttributes.attributeTypeMap = {
    cloudProvider: {
        baseName: "cloud_provider",
        type: "{ [key: string]: { [key: string]: Array<string>; }; }",
        required: true,
    },
    uuid: {
        baseName: "uuid",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ResourceFilterAttributes.js.map
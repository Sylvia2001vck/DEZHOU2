"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricAssetAttributes = void 0;
/**
 * Assets related to the object, including title, url, and tags.
 */
class MetricAssetAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricAssetAttributes.attributeTypeMap;
    }
}
exports.MetricAssetAttributes = MetricAssetAttributes;
/**
 * @ignore
 */
MetricAssetAttributes.attributeTypeMap = {
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    url: {
        baseName: "url",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricAssetAttributes.js.map
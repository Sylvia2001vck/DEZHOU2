"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricAllTagsAttributes = void 0;
/**
 * Object containing the definition of a metric's indexed and ingested tags.
 */
class MetricAllTagsAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricAllTagsAttributes.attributeTypeMap;
    }
}
exports.MetricAllTagsAttributes = MetricAllTagsAttributes;
/**
 * @ignore
 */
MetricAllTagsAttributes.attributeTypeMap = {
    ingestedTags: {
        baseName: "ingested_tags",
        type: "Array<string>",
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
//# sourceMappingURL=MetricAllTagsAttributes.js.map
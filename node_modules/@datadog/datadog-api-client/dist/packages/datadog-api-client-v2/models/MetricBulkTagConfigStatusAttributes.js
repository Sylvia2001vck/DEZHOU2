"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricBulkTagConfigStatusAttributes = void 0;
/**
 * Optional attributes for the status of a bulk tag configuration request.
 */
class MetricBulkTagConfigStatusAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricBulkTagConfigStatusAttributes.attributeTypeMap;
    }
}
exports.MetricBulkTagConfigStatusAttributes = MetricBulkTagConfigStatusAttributes;
/**
 * @ignore
 */
MetricBulkTagConfigStatusAttributes.attributeTypeMap = {
    emails: {
        baseName: "emails",
        type: "Array<string>",
    },
    excludeTagsMode: {
        baseName: "exclude_tags_mode",
        type: "boolean",
    },
    status: {
        baseName: "status",
        type: "string",
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
//# sourceMappingURL=MetricBulkTagConfigStatusAttributes.js.map
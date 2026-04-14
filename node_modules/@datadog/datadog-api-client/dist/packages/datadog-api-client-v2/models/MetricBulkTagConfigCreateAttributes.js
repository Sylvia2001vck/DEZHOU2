"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricBulkTagConfigCreateAttributes = void 0;
/**
 * Optional parameters for bulk creating metric tag configurations.
 */
class MetricBulkTagConfigCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricBulkTagConfigCreateAttributes.attributeTypeMap;
    }
}
exports.MetricBulkTagConfigCreateAttributes = MetricBulkTagConfigCreateAttributes;
/**
 * @ignore
 */
MetricBulkTagConfigCreateAttributes.attributeTypeMap = {
    emails: {
        baseName: "emails",
        type: "Array<string>",
    },
    excludeTagsMode: {
        baseName: "exclude_tags_mode",
        type: "boolean",
    },
    includeActivelyQueriedTagsWindow: {
        baseName: "include_actively_queried_tags_window",
        type: "number",
        format: "double",
    },
    overrideExistingConfigurations: {
        baseName: "override_existing_configurations",
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
//# sourceMappingURL=MetricBulkTagConfigCreateAttributes.js.map
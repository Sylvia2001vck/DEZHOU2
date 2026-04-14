"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetricBulkTagConfigDeleteAttributes = void 0;
/**
 * Optional parameters for bulk deleting metric tag configurations.
 */
class MetricBulkTagConfigDeleteAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MetricBulkTagConfigDeleteAttributes.attributeTypeMap;
    }
}
exports.MetricBulkTagConfigDeleteAttributes = MetricBulkTagConfigDeleteAttributes;
/**
 * @ignore
 */
MetricBulkTagConfigDeleteAttributes.attributeTypeMap = {
    emails: {
        baseName: "emails",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MetricBulkTagConfigDeleteAttributes.js.map
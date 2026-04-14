"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RumMetricGroupBy = void 0;
/**
 * A group by rule.
 */
class RumMetricGroupBy {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RumMetricGroupBy.attributeTypeMap;
    }
}
exports.RumMetricGroupBy = RumMetricGroupBy;
/**
 * @ignore
 */
RumMetricGroupBy.attributeTypeMap = {
    path: {
        baseName: "path",
        type: "string",
        required: true,
    },
    tagName: {
        baseName: "tag_name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RumMetricGroupBy.js.map
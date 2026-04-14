"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCaseInsight = void 0;
/**
 * Insight of the case.
 */
class IssueCaseInsight {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssueCaseInsight.attributeTypeMap;
    }
}
exports.IssueCaseInsight = IssueCaseInsight;
/**
 * @ignore
 */
IssueCaseInsight.attributeTypeMap = {
    ref: {
        baseName: "ref",
        type: "string",
    },
    resourceId: {
        baseName: "resource_id",
        type: "string",
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
//# sourceMappingURL=IssueCaseInsight.js.map
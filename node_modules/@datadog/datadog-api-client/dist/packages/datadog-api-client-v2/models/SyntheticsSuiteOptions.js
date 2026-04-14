"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyntheticsSuiteOptions = void 0;
/**
 * Object describing the extra options for a Synthetic suite.
 */
class SyntheticsSuiteOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SyntheticsSuiteOptions.attributeTypeMap;
    }
}
exports.SyntheticsSuiteOptions = SyntheticsSuiteOptions;
/**
 * @ignore
 */
SyntheticsSuiteOptions.attributeTypeMap = {
    alertingThreshold: {
        baseName: "alerting_threshold",
        type: "number",
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SyntheticsSuiteOptions.js.map
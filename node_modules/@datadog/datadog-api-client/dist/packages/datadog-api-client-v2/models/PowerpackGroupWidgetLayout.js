"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerpackGroupWidgetLayout = void 0;
/**
 * Powerpack group widget layout.
 */
class PowerpackGroupWidgetLayout {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PowerpackGroupWidgetLayout.attributeTypeMap;
    }
}
exports.PowerpackGroupWidgetLayout = PowerpackGroupWidgetLayout;
/**
 * @ignore
 */
PowerpackGroupWidgetLayout.attributeTypeMap = {
    height: {
        baseName: "height",
        type: "number",
        required: true,
        format: "int64",
    },
    width: {
        baseName: "width",
        type: "number",
        required: true,
        format: "int64",
    },
    x: {
        baseName: "x",
        type: "number",
        required: true,
        format: "int64",
    },
    y: {
        baseName: "y",
        type: "number",
        required: true,
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PowerpackGroupWidgetLayout.js.map
"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerpackInnerWidgetLayout = void 0;
/**
 * Powerpack inner widget layout.
 */
class PowerpackInnerWidgetLayout {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PowerpackInnerWidgetLayout.attributeTypeMap;
    }
}
exports.PowerpackInnerWidgetLayout = PowerpackInnerWidgetLayout;
/**
 * @ignore
 */
PowerpackInnerWidgetLayout.attributeTypeMap = {
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
//# sourceMappingURL=PowerpackInnerWidgetLayout.js.map
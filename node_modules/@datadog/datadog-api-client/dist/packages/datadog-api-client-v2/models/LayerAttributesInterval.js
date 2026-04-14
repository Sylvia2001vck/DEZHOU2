"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerAttributesInterval = void 0;
/**
 * Defines how often the rotation repeats, using a combination of days and optional seconds. Should be at least 1 hour.
 */
class LayerAttributesInterval {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return LayerAttributesInterval.attributeTypeMap;
    }
}
exports.LayerAttributesInterval = LayerAttributesInterval;
/**
 * @ignore
 */
LayerAttributesInterval.attributeTypeMap = {
    days: {
        baseName: "days",
        type: "number",
        format: "int32",
    },
    seconds: {
        baseName: "seconds",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=LayerAttributesInterval.js.map
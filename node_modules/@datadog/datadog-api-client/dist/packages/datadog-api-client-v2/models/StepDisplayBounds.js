"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepDisplayBounds = void 0;
/**
 * The definition of `StepDisplayBounds` object.
 */
class StepDisplayBounds {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StepDisplayBounds.attributeTypeMap;
    }
}
exports.StepDisplayBounds = StepDisplayBounds;
/**
 * @ignore
 */
StepDisplayBounds.attributeTypeMap = {
    x: {
        baseName: "x",
        type: "number",
        format: "double",
    },
    y: {
        baseName: "y",
        type: "number",
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=StepDisplayBounds.js.map
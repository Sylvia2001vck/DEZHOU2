"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftDataAttributes = void 0;
/**
 * Attributes for an on-call shift.
 */
class ShiftDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ShiftDataAttributes.attributeTypeMap;
    }
}
exports.ShiftDataAttributes = ShiftDataAttributes;
/**
 * @ignore
 */
ShiftDataAttributes.attributeTypeMap = {
    end: {
        baseName: "end",
        type: "Date",
        format: "date-time",
    },
    start: {
        baseName: "start",
        type: "Date",
        format: "date-time",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ShiftDataAttributes.js.map
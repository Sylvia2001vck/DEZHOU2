"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleDataAttributes = void 0;
/**
 * Provides core properties of a schedule object such as its name and time zone.
 */
class ScheduleDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScheduleDataAttributes.attributeTypeMap;
    }
}
exports.ScheduleDataAttributes = ScheduleDataAttributes;
/**
 * @ignore
 */
ScheduleDataAttributes.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
    },
    timeZone: {
        baseName: "time_zone",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScheduleDataAttributes.js.map
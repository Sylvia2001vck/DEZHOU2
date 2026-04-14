"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsQueryOptions = void 0;
/**
 * The global query options that are used. Either provide a timezone or a time offset but not both,
 * otherwise the query fails.
 */
class EventsQueryOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventsQueryOptions.attributeTypeMap;
    }
}
exports.EventsQueryOptions = EventsQueryOptions;
/**
 * @ignore
 */
EventsQueryOptions.attributeTypeMap = {
    timeOffset: {
        baseName: "timeOffset",
        type: "number",
        format: "int64",
    },
    timezone: {
        baseName: "timezone",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EventsQueryOptions.js.map
"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsSearch = void 0;
/**
 * Configuration of the search/filter for an events query.
 */
class EventsSearch {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventsSearch.attributeTypeMap;
    }
}
exports.EventsSearch = EventsSearch;
/**
 * @ignore
 */
EventsSearch.attributeTypeMap = {
    query: {
        baseName: "query",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EventsSearch.js.map
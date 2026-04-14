"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsRequestPage = void 0;
/**
 * Pagination settings.
 */
class EventsRequestPage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventsRequestPage.attributeTypeMap;
    }
}
exports.EventsRequestPage = EventsRequestPage;
/**
 * @ignore
 */
EventsRequestPage.attributeTypeMap = {
    cursor: {
        baseName: "cursor",
        type: "string",
    },
    limit: {
        baseName: "limit",
        type: "number",
        format: "int32",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EventsRequestPage.js.map
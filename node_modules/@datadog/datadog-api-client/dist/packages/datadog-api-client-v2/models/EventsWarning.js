"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsWarning = void 0;
/**
 * A warning message indicating something is wrong with the query.
 */
class EventsWarning {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EventsWarning.attributeTypeMap;
    }
}
exports.EventsWarning = EventsWarning;
/**
 * @ignore
 */
EventsWarning.attributeTypeMap = {
    code: {
        baseName: "code",
        type: "string",
    },
    detail: {
        baseName: "detail",
        type: "string",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=EventsWarning.js.map
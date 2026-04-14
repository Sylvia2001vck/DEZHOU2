"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewershipHistorySessionDataAttributes = void 0;
class ViewershipHistorySessionDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ViewershipHistorySessionDataAttributes.attributeTypeMap;
    }
}
exports.ViewershipHistorySessionDataAttributes = ViewershipHistorySessionDataAttributes;
/**
 * @ignore
 */
ViewershipHistorySessionDataAttributes.attributeTypeMap = {
    eventId: {
        baseName: "event_id",
        type: "string",
    },
    lastWatchedAt: {
        baseName: "last_watched_at",
        type: "Date",
        required: true,
        format: "date-time",
    },
    sessionEvent: {
        baseName: "session_event",
        type: "{ [key: string]: any; }",
    },
    track: {
        baseName: "track",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ViewershipHistorySessionDataAttributes.js.map
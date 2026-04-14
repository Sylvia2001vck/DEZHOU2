"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatcherDataAttributes = void 0;
class WatcherDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WatcherDataAttributes.attributeTypeMap;
    }
}
exports.WatcherDataAttributes = WatcherDataAttributes;
/**
 * @ignore
 */
WatcherDataAttributes.attributeTypeMap = {
    handle: {
        baseName: "handle",
        type: "string",
        required: true,
    },
    icon: {
        baseName: "icon",
        type: "string",
    },
    lastWatchedAt: {
        baseName: "last_watched_at",
        type: "Date",
        required: true,
        format: "date-time",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    watchCount: {
        baseName: "watch_count",
        type: "number",
        required: true,
        format: "int32",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WatcherDataAttributes.js.map
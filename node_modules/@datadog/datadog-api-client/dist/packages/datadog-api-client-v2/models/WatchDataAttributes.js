"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WatchDataAttributes = void 0;
class WatchDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WatchDataAttributes.attributeTypeMap;
    }
}
exports.WatchDataAttributes = WatchDataAttributes;
/**
 * @ignore
 */
WatchDataAttributes.attributeTypeMap = {
    applicationId: {
        baseName: "application_id",
        type: "string",
        required: true,
    },
    dataSource: {
        baseName: "data_source",
        type: "string",
    },
    eventId: {
        baseName: "event_id",
        type: "string",
        required: true,
    },
    timestamp: {
        baseName: "timestamp",
        type: "Date",
        required: true,
        format: "date-time",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WatchDataAttributes.js.map
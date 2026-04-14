"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotCreateRequestDataAttributes = void 0;
class SnapshotCreateRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SnapshotCreateRequestDataAttributes.attributeTypeMap;
    }
}
exports.SnapshotCreateRequestDataAttributes = SnapshotCreateRequestDataAttributes;
/**
 * @ignore
 */
SnapshotCreateRequestDataAttributes.attributeTypeMap = {
    applicationId: {
        baseName: "application_id",
        type: "string",
        required: true,
    },
    deviceType: {
        baseName: "device_type",
        type: "string",
        required: true,
    },
    eventId: {
        baseName: "event_id",
        type: "string",
        required: true,
    },
    isDeviceTypeSelectedByUser: {
        baseName: "is_device_type_selected_by_user",
        type: "boolean",
        required: true,
    },
    sessionId: {
        baseName: "session_id",
        type: "string",
    },
    snapshotName: {
        baseName: "snapshot_name",
        type: "string",
        required: true,
    },
    start: {
        baseName: "start",
        type: "number",
        required: true,
        format: "int64",
    },
    viewId: {
        baseName: "view_id",
        type: "string",
    },
    viewName: {
        baseName: "view_name",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SnapshotCreateRequestDataAttributes.js.map
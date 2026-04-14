"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotDataAttributes = void 0;
class SnapshotDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SnapshotDataAttributes.attributeTypeMap;
    }
}
exports.SnapshotDataAttributes = SnapshotDataAttributes;
/**
 * @ignore
 */
SnapshotDataAttributes.attributeTypeMap = {
    applicationId: {
        baseName: "application_id",
        type: "string",
    },
    createdAt: {
        baseName: "created_at",
        type: "Date",
        format: "date-time",
    },
    createdBy: {
        baseName: "created_by",
        type: "string",
    },
    createdByHandle: {
        baseName: "created_by_handle",
        type: "string",
    },
    createdByUserId: {
        baseName: "created_by_user_id",
        type: "number",
        format: "int64",
    },
    deviceType: {
        baseName: "device_type",
        type: "string",
    },
    eventId: {
        baseName: "event_id",
        type: "string",
    },
    isDeviceTypeSelectedByUser: {
        baseName: "is_device_type_selected_by_user",
        type: "boolean",
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "Date",
        format: "date-time",
    },
    orgId: {
        baseName: "org_id",
        type: "number",
        format: "int64",
    },
    sessionId: {
        baseName: "session_id",
        type: "string",
    },
    snapshotName: {
        baseName: "snapshot_name",
        type: "string",
    },
    start: {
        baseName: "start",
        type: "number",
        format: "int64",
    },
    viewId: {
        baseName: "view_id",
        type: "string",
    },
    viewName: {
        baseName: "view_name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SnapshotDataAttributes.js.map
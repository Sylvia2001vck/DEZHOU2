"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotUpdateRequestDataAttributes = void 0;
class SnapshotUpdateRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SnapshotUpdateRequestDataAttributes.attributeTypeMap;
    }
}
exports.SnapshotUpdateRequestDataAttributes = SnapshotUpdateRequestDataAttributes;
/**
 * @ignore
 */
SnapshotUpdateRequestDataAttributes.attributeTypeMap = {
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
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SnapshotUpdateRequestDataAttributes.js.map
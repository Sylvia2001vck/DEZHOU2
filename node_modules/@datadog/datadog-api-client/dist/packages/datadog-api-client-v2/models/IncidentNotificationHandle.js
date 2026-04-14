"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentNotificationHandle = void 0;
/**
 * A notification handle that will be notified at incident creation.
 */
class IncidentNotificationHandle {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentNotificationHandle.attributeTypeMap;
    }
}
exports.IncidentNotificationHandle = IncidentNotificationHandle;
/**
 * @ignore
 */
IncidentNotificationHandle.attributeTypeMap = {
    displayName: {
        baseName: "display_name",
        type: "string",
    },
    handle: {
        baseName: "handle",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentNotificationHandle.js.map
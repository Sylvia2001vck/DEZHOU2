"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DowntimeResponseAttributes = void 0;
/**
 * Downtime details.
 */
class DowntimeResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DowntimeResponseAttributes.attributeTypeMap;
    }
}
exports.DowntimeResponseAttributes = DowntimeResponseAttributes;
/**
 * @ignore
 */
DowntimeResponseAttributes.attributeTypeMap = {
    canceled: {
        baseName: "canceled",
        type: "Date",
        format: "date-time",
    },
    created: {
        baseName: "created",
        type: "Date",
        format: "date-time",
    },
    displayTimezone: {
        baseName: "display_timezone",
        type: "string",
    },
    message: {
        baseName: "message",
        type: "string",
    },
    modified: {
        baseName: "modified",
        type: "Date",
        format: "date-time",
    },
    monitorIdentifier: {
        baseName: "monitor_identifier",
        type: "DowntimeMonitorIdentifier",
    },
    muteFirstRecoveryNotification: {
        baseName: "mute_first_recovery_notification",
        type: "boolean",
    },
    notifyEndStates: {
        baseName: "notify_end_states",
        type: "Array<DowntimeNotifyEndStateTypes>",
    },
    notifyEndTypes: {
        baseName: "notify_end_types",
        type: "Array<DowntimeNotifyEndStateActions>",
    },
    schedule: {
        baseName: "schedule",
        type: "DowntimeScheduleResponse",
    },
    scope: {
        baseName: "scope",
        type: "string",
    },
    status: {
        baseName: "status",
        type: "DowntimeStatus",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DowntimeResponseAttributes.js.map
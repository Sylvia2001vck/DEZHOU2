"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DowntimeCreateRequestAttributes = void 0;
/**
 * Downtime details.
 */
class DowntimeCreateRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DowntimeCreateRequestAttributes.attributeTypeMap;
    }
}
exports.DowntimeCreateRequestAttributes = DowntimeCreateRequestAttributes;
/**
 * @ignore
 */
DowntimeCreateRequestAttributes.attributeTypeMap = {
    displayTimezone: {
        baseName: "display_timezone",
        type: "string",
    },
    message: {
        baseName: "message",
        type: "string",
    },
    monitorIdentifier: {
        baseName: "monitor_identifier",
        type: "DowntimeMonitorIdentifier",
        required: true,
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
        type: "DowntimeScheduleCreateRequest",
    },
    scope: {
        baseName: "scope",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DowntimeCreateRequestAttributes.js.map
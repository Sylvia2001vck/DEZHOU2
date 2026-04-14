"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DowntimeUpdateRequestAttributes = void 0;
/**
 * Attributes of the downtime to update.
 */
class DowntimeUpdateRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DowntimeUpdateRequestAttributes.attributeTypeMap;
    }
}
exports.DowntimeUpdateRequestAttributes = DowntimeUpdateRequestAttributes;
/**
 * @ignore
 */
DowntimeUpdateRequestAttributes.attributeTypeMap = {
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
        type: "DowntimeScheduleUpdateRequest",
    },
    scope: {
        baseName: "scope",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DowntimeUpdateRequestAttributes.js.map
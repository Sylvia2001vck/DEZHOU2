"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSignalTriageAttributes = void 0;
/**
 * Attributes describing a triage state update operation over a security signal.
 */
class SecurityMonitoringSignalTriageAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSignalTriageAttributes.attributeTypeMap;
    }
}
exports.SecurityMonitoringSignalTriageAttributes = SecurityMonitoringSignalTriageAttributes;
/**
 * @ignore
 */
SecurityMonitoringSignalTriageAttributes.attributeTypeMap = {
    archiveComment: {
        baseName: "archive_comment",
        type: "string",
    },
    archiveCommentTimestamp: {
        baseName: "archive_comment_timestamp",
        type: "number",
        format: "int64",
    },
    archiveCommentUser: {
        baseName: "archive_comment_user",
        type: "SecurityMonitoringTriageUser",
    },
    archiveReason: {
        baseName: "archive_reason",
        type: "SecurityMonitoringSignalArchiveReason",
    },
    assignee: {
        baseName: "assignee",
        type: "SecurityMonitoringTriageUser",
        required: true,
    },
    incidentIds: {
        baseName: "incident_ids",
        type: "Array<number>",
        required: true,
    },
    state: {
        baseName: "state",
        type: "SecurityMonitoringSignalState",
        required: true,
    },
    stateUpdateTimestamp: {
        baseName: "state_update_timestamp",
        type: "number",
        format: "int64",
    },
    stateUpdateUser: {
        baseName: "state_update_user",
        type: "SecurityMonitoringTriageUser",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSignalTriageAttributes.js.map
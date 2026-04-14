/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityMonitoringSignalArchiveReason } from "./SecurityMonitoringSignalArchiveReason";
import { SecurityMonitoringSignalState } from "./SecurityMonitoringSignalState";
import { SecurityMonitoringTriageUser } from "./SecurityMonitoringTriageUser";
import { AttributeTypeMap } from "../../datadog-api-client-common/util";
/**
 * Attributes describing a triage state update operation over a security signal.
 */
export declare class SecurityMonitoringSignalTriageAttributes {
    /**
     * Optional comment to display on archived signals.
     */
    "archiveComment"?: string;
    /**
     * Timestamp of the last edit to the comment.
     */
    "archiveCommentTimestamp"?: number;
    /**
     * Object representing a given user entity.
     */
    "archiveCommentUser"?: SecurityMonitoringTriageUser;
    /**
     * Reason a signal is archived.
     */
    "archiveReason"?: SecurityMonitoringSignalArchiveReason;
    /**
     * Object representing a given user entity.
     */
    "assignee": SecurityMonitoringTriageUser;
    /**
     * Array of incidents that are associated with this signal.
     */
    "incidentIds": Array<number>;
    /**
     * The new triage state of the signal.
     */
    "state": SecurityMonitoringSignalState;
    /**
     * Timestamp of the last update to the signal state.
     */
    "stateUpdateTimestamp"?: number;
    /**
     * Object representing a given user entity.
     */
    "stateUpdateUser"?: SecurityMonitoringTriageUser;
    /**
     * A container for additional, undeclared properties.
     * This is a holder for any undeclared properties as specified with
     * the 'additionalProperties' keyword in the OAS document.
     */
    "additionalProperties"?: {
        [key: string]: any;
    };
    /**
     * @ignore
     */
    "_unparsed"?: boolean;
    /**
     * @ignore
     */
    static readonly attributeTypeMap: AttributeTypeMap;
    /**
     * @ignore
     */
    static getAttributeTypeMap(): AttributeTypeMap;
    constructor();
}

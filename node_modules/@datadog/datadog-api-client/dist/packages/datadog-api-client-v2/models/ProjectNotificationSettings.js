"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectNotificationSettings = void 0;
/**
 * Project notification settings
 */
class ProjectNotificationSettings {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProjectNotificationSettings.attributeTypeMap;
    }
}
exports.ProjectNotificationSettings = ProjectNotificationSettings;
/**
 * @ignore
 */
ProjectNotificationSettings.attributeTypeMap = {
    destinations: {
        baseName: "destinations",
        type: "Array<number>",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    notifyOnCaseAssignment: {
        baseName: "notify_on_case_assignment",
        type: "boolean",
    },
    notifyOnCaseClosed: {
        baseName: "notify_on_case_closed",
        type: "boolean",
    },
    notifyOnCaseComment: {
        baseName: "notify_on_case_comment",
        type: "boolean",
    },
    notifyOnCaseCommentMention: {
        baseName: "notify_on_case_comment_mention",
        type: "boolean",
    },
    notifyOnCasePriorityChange: {
        baseName: "notify_on_case_priority_change",
        type: "boolean",
    },
    notifyOnCaseStatusChange: {
        baseName: "notify_on_case_status_change",
        type: "boolean",
    },
    notifyOnCaseUnassignment: {
        baseName: "notify_on_case_unassignment",
        type: "boolean",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProjectNotificationSettings.js.map
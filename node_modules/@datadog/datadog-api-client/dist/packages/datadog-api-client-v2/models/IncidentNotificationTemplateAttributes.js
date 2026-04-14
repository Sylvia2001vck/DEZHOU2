"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentNotificationTemplateAttributes = void 0;
/**
 * The notification template's attributes.
 */
class IncidentNotificationTemplateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentNotificationTemplateAttributes.attributeTypeMap;
    }
}
exports.IncidentNotificationTemplateAttributes = IncidentNotificationTemplateAttributes;
/**
 * @ignore
 */
IncidentNotificationTemplateAttributes.attributeTypeMap = {
    category: {
        baseName: "category",
        type: "string",
        required: true,
    },
    content: {
        baseName: "content",
        type: "string",
        required: true,
    },
    created: {
        baseName: "created",
        type: "Date",
        required: true,
        format: "date-time",
    },
    modified: {
        baseName: "modified",
        type: "Date",
        required: true,
        format: "date-time",
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    subject: {
        baseName: "subject",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentNotificationTemplateAttributes.js.map
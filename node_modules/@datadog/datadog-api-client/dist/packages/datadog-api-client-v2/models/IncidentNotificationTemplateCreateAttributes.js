"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentNotificationTemplateCreateAttributes = void 0;
/**
 * The attributes for creating a notification template.
 */
class IncidentNotificationTemplateCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentNotificationTemplateCreateAttributes.attributeTypeMap;
    }
}
exports.IncidentNotificationTemplateCreateAttributes = IncidentNotificationTemplateCreateAttributes;
/**
 * @ignore
 */
IncidentNotificationTemplateCreateAttributes.attributeTypeMap = {
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
//# sourceMappingURL=IncidentNotificationTemplateCreateAttributes.js.map
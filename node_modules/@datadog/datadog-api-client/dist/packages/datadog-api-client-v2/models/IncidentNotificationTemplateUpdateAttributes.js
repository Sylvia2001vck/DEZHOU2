"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentNotificationTemplateUpdateAttributes = void 0;
/**
 * The attributes to update on a notification template.
 */
class IncidentNotificationTemplateUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentNotificationTemplateUpdateAttributes.attributeTypeMap;
    }
}
exports.IncidentNotificationTemplateUpdateAttributes = IncidentNotificationTemplateUpdateAttributes;
/**
 * @ignore
 */
IncidentNotificationTemplateUpdateAttributes.attributeTypeMap = {
    category: {
        baseName: "category",
        type: "string",
    },
    content: {
        baseName: "content",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    subject: {
        baseName: "subject",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentNotificationTemplateUpdateAttributes.js.map
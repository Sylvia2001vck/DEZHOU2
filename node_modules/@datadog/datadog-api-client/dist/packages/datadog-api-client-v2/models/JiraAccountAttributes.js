"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraAccountAttributes = void 0;
/**
 * Attributes of a Jira account
 */
class JiraAccountAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JiraAccountAttributes.attributeTypeMap;
    }
}
exports.JiraAccountAttributes = JiraAccountAttributes;
/**
 * @ignore
 */
JiraAccountAttributes.attributeTypeMap = {
    consumerKey: {
        baseName: "consumer_key",
        type: "string",
        required: true,
    },
    instanceUrl: {
        baseName: "instance_url",
        type: "string",
        required: true,
    },
    lastWebhookTimestamp: {
        baseName: "last_webhook_timestamp",
        type: "Date",
        format: "date-time",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=JiraAccountAttributes.js.map
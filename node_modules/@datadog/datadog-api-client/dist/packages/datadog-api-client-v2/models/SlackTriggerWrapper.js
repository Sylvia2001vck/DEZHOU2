"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlackTriggerWrapper = void 0;
/**
 * Schema for a Slack-based trigger.
 */
class SlackTriggerWrapper {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SlackTriggerWrapper.attributeTypeMap;
    }
}
exports.SlackTriggerWrapper = SlackTriggerWrapper;
/**
 * @ignore
 */
SlackTriggerWrapper.attributeTypeMap = {
    slackTrigger: {
        baseName: "slackTrigger",
        type: "any",
        required: true,
    },
    startStepNames: {
        baseName: "startStepNames",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SlackTriggerWrapper.js.map
"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.JiraAccountsMeta = void 0;
/**
 * Metadata for Jira accounts response
 */
class JiraAccountsMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return JiraAccountsMeta.attributeTypeMap;
    }
}
exports.JiraAccountsMeta = JiraAccountsMeta;
/**
 * @ignore
 */
JiraAccountsMeta.attributeTypeMap = {
    publicKey: {
        baseName: "public_key",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=JiraAccountsMeta.js.map
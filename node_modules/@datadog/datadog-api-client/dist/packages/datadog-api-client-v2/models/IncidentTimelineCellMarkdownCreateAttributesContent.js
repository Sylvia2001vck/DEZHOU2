"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentTimelineCellMarkdownCreateAttributesContent = void 0;
/**
 * The Markdown timeline cell contents.
 */
class IncidentTimelineCellMarkdownCreateAttributesContent {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentTimelineCellMarkdownCreateAttributesContent.attributeTypeMap;
    }
}
exports.IncidentTimelineCellMarkdownCreateAttributesContent = IncidentTimelineCellMarkdownCreateAttributesContent;
/**
 * @ignore
 */
IncidentTimelineCellMarkdownCreateAttributesContent.attributeTypeMap = {
    content: {
        baseName: "content",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentTimelineCellMarkdownCreateAttributesContent.js.map
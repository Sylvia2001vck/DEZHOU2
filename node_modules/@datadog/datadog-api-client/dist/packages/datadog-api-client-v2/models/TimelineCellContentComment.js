"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCellContentComment = void 0;
/**
 * comment content
 */
class TimelineCellContentComment {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TimelineCellContentComment.attributeTypeMap;
    }
}
exports.TimelineCellContentComment = TimelineCellContentComment;
/**
 * @ignore
 */
TimelineCellContentComment.attributeTypeMap = {
    message: {
        baseName: "message",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TimelineCellContentComment.js.map
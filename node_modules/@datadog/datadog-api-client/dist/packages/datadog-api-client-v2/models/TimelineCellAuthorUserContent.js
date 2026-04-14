"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineCellAuthorUserContent = void 0;
/**
 * user author content.
 */
class TimelineCellAuthorUserContent {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TimelineCellAuthorUserContent.attributeTypeMap;
    }
}
exports.TimelineCellAuthorUserContent = TimelineCellAuthorUserContent;
/**
 * @ignore
 */
TimelineCellAuthorUserContent.attributeTypeMap = {
    email: {
        baseName: "email",
        type: "string",
    },
    handle: {
        baseName: "handle",
        type: "string",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TimelineCellAuthorUserContent.js.map
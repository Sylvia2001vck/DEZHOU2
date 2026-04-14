"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPagesUserAttributes = void 0;
/**
 * Attributes of the Datadog user.
 */
class StatusPagesUserAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return StatusPagesUserAttributes.attributeTypeMap;
    }
}
exports.StatusPagesUserAttributes = StatusPagesUserAttributes;
/**
 * @ignore
 */
StatusPagesUserAttributes.attributeTypeMap = {
    email: {
        baseName: "email",
        type: "string",
    },
    handle: {
        baseName: "handle",
        type: "string",
    },
    icon: {
        baseName: "icon",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    uuid: {
        baseName: "uuid",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=StatusPagesUserAttributes.js.map
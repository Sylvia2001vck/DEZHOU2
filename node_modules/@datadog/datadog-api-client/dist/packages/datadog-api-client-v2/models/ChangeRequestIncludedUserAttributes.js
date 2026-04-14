"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRequestIncludedUserAttributes = void 0;
/**
 * Attributes of an included user.
 */
class ChangeRequestIncludedUserAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeRequestIncludedUserAttributes.attributeTypeMap;
    }
}
exports.ChangeRequestIncludedUserAttributes = ChangeRequestIncludedUserAttributes;
/**
 * @ignore
 */
ChangeRequestIncludedUserAttributes.attributeTypeMap = {
    email: {
        baseName: "email",
        type: "string",
        required: true,
    },
    handle: {
        baseName: "handle",
        type: "string",
        required: true,
    },
    name: {
        baseName: "name",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeRequestIncludedUserAttributes.js.map
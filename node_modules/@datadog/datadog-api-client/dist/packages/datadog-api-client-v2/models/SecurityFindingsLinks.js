"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityFindingsLinks = void 0;
/**
 * Links for pagination.
 */
class SecurityFindingsLinks {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityFindingsLinks.attributeTypeMap;
    }
}
exports.SecurityFindingsLinks = SecurityFindingsLinks;
/**
 * @ignore
 */
SecurityFindingsLinks.attributeTypeMap = {
    next: {
        baseName: "next",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityFindingsLinks.js.map
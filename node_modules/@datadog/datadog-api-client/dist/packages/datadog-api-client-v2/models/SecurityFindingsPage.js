"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityFindingsPage = void 0;
/**
 * Pagination information.
 */
class SecurityFindingsPage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityFindingsPage.attributeTypeMap;
    }
}
exports.SecurityFindingsPage = SecurityFindingsPage;
/**
 * @ignore
 */
SecurityFindingsPage.attributeTypeMap = {
    after: {
        baseName: "after",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityFindingsPage.js.map
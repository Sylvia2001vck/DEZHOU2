"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleUser = void 0;
/**
 * User creating or modifying a rule.
 */
class RuleUser {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RuleUser.attributeTypeMap;
    }
}
exports.RuleUser = RuleUser;
/**
 * @ignore
 */
RuleUser.attributeTypeMap = {
    handle: {
        baseName: "handle",
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
//# sourceMappingURL=RuleUser.js.map
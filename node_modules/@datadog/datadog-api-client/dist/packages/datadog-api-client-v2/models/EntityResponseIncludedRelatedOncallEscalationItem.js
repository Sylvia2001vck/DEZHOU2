"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityResponseIncludedRelatedOncallEscalationItem = void 0;
/**
 * Oncall escalation.
 */
class EntityResponseIncludedRelatedOncallEscalationItem {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return EntityResponseIncludedRelatedOncallEscalationItem.attributeTypeMap;
    }
}
exports.EntityResponseIncludedRelatedOncallEscalationItem = EntityResponseIncludedRelatedOncallEscalationItem;
/**
 * @ignore
 */
EntityResponseIncludedRelatedOncallEscalationItem.attributeTypeMap = {
    email: {
        baseName: "email",
        type: "string",
    },
    escalationLevel: {
        baseName: "escalationLevel",
        type: "number",
        format: "int64",
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
//# sourceMappingURL=EntityResponseIncludedRelatedOncallEscalationItem.js.map
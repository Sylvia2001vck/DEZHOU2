"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevertCustomRuleRevisionRequestDataAttributes = void 0;
class RevertCustomRuleRevisionRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RevertCustomRuleRevisionRequestDataAttributes.attributeTypeMap;
    }
}
exports.RevertCustomRuleRevisionRequestDataAttributes = RevertCustomRuleRevisionRequestDataAttributes;
/**
 * @ignore
 */
RevertCustomRuleRevisionRequestDataAttributes.attributeTypeMap = {
    currentRevision: {
        baseName: "currentRevision",
        type: "string",
    },
    revertToRevision: {
        baseName: "revertToRevision",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RevertCustomRuleRevisionRequestDataAttributes.js.map
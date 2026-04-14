"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRequestDecisionUpdateDataAttributes = void 0;
/**
 * Attributes of the parent change request for a decision update.
 */
class ChangeRequestDecisionUpdateDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeRequestDecisionUpdateDataAttributes.attributeTypeMap;
    }
}
exports.ChangeRequestDecisionUpdateDataAttributes = ChangeRequestDecisionUpdateDataAttributes;
/**
 * @ignore
 */
ChangeRequestDecisionUpdateDataAttributes.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeRequestDecisionUpdateDataAttributes.js.map
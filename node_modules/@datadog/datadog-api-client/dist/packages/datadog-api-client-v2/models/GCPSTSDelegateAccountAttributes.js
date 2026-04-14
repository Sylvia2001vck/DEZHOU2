"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCPSTSDelegateAccountAttributes = void 0;
/**
 * Your delegate account attributes.
 */
class GCPSTSDelegateAccountAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GCPSTSDelegateAccountAttributes.attributeTypeMap;
    }
}
exports.GCPSTSDelegateAccountAttributes = GCPSTSDelegateAccountAttributes;
/**
 * @ignore
 */
GCPSTSDelegateAccountAttributes.attributeTypeMap = {
    delegateAccountEmail: {
        baseName: "delegate_account_email",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GCPSTSDelegateAccountAttributes.js.map
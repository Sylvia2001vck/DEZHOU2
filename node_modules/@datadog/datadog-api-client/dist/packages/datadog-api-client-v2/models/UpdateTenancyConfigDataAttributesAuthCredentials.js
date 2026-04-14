"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTenancyConfigDataAttributesAuthCredentials = void 0;
class UpdateTenancyConfigDataAttributesAuthCredentials {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateTenancyConfigDataAttributesAuthCredentials.attributeTypeMap;
    }
}
exports.UpdateTenancyConfigDataAttributesAuthCredentials = UpdateTenancyConfigDataAttributesAuthCredentials;
/**
 * @ignore
 */
UpdateTenancyConfigDataAttributesAuthCredentials.attributeTypeMap = {
    fingerprint: {
        baseName: "fingerprint",
        type: "string",
    },
    privateKey: {
        baseName: "private_key",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateTenancyConfigDataAttributesAuthCredentials.js.map
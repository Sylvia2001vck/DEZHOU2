"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgConfigWriteAttributes = void 0;
/**
 * Writable attributes of an Org Config.
 */
class OrgConfigWriteAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrgConfigWriteAttributes.attributeTypeMap;
    }
}
exports.OrgConfigWriteAttributes = OrgConfigWriteAttributes;
/**
 * @ignore
 */
OrgConfigWriteAttributes.attributeTypeMap = {
    value: {
        baseName: "value",
        type: "any",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrgConfigWriteAttributes.js.map
"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnassignSeatsUserRequestDataAttributes = void 0;
class UnassignSeatsUserRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UnassignSeatsUserRequestDataAttributes.attributeTypeMap;
    }
}
exports.UnassignSeatsUserRequestDataAttributes = UnassignSeatsUserRequestDataAttributes;
/**
 * @ignore
 */
UnassignSeatsUserRequestDataAttributes.attributeTypeMap = {
    productCode: {
        baseName: "product_code",
        type: "string",
        required: true,
    },
    userUuids: {
        baseName: "user_uuids",
        type: "Array<string>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UnassignSeatsUserRequestDataAttributes.js.map
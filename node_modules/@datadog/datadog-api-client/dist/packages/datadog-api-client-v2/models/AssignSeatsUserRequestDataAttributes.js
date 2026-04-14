"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignSeatsUserRequestDataAttributes = void 0;
class AssignSeatsUserRequestDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return AssignSeatsUserRequestDataAttributes.attributeTypeMap;
    }
}
exports.AssignSeatsUserRequestDataAttributes = AssignSeatsUserRequestDataAttributes;
/**
 * @ignore
 */
AssignSeatsUserRequestDataAttributes.attributeTypeMap = {
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
//# sourceMappingURL=AssignSeatsUserRequestDataAttributes.js.map